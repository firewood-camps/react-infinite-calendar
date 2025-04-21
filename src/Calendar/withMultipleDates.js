import React, { useState, useCallback, useMemo } from 'react';
import { withDefaultProps } from './';
import { sanitizeDate, withImmutableProps } from '../utils';
import enhanceHeader from '../Header/withMultipleDates';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

/**
 * Enhance Day component to display selected state based on an array of selected dates
 * 
 * @param {Function} DayComponent - The base Day component to enhance
 * @returns {Function} Enhanced Day component with multiple date selection support
 */
const enhanceDay = (DayComponent) => (props) => {
  const isSelected = props.selected.indexOf(props.date) !== -1;
  return <DayComponent {...props} isSelected={isSelected} />;
};

/**
 * Enhance Years component to work with multiple date selection
 * 
 * @param {Function} YearsComponent - The base Years component to enhance
 * @returns {Function} Enhanced Years component with multiple date selection support
 */
const enhanceYears = (YearsComponent) => (props) => {
  const selected = props.displayDate ? parse(props.displayDate) : null;
  return <YearsComponent {...props} selected={selected} />;
};

/**
 * Higher-order component that adds multiple date selection functionality
 * Converts a base Calendar component into one that supports selecting multiple dates
 * 
 * @param {Function} Component - The base Calendar component to enhance
 * @returns {Function} Enhanced Calendar component with multiple date selection support
 */
export const withMultipleDates = (Component) => {
  return (props) => {
    const { DayComponent, HeaderComponent, YearsComponent, selected: selectedProp, ...restProps } = props;
    const [scrollDate, setScrollDate] = useState(getInitialDate(props));
    const [displayDate, setDisplayDate] = useState(getInitialDate(props));

    const enhancedDayComponent = useMemo(() => enhanceDay(DayComponent), [DayComponent]);
    const enhancedHeaderComponent = useMemo(() => enhanceHeader(HeaderComponent), [HeaderComponent]);
    const enhancedYearsComponent = useMemo(() => enhanceYears(YearsComponent), [YearsComponent]);

    /**
     * Handle date selection and update display date
     * @param {Date} date - The selected date
     */
    const handleSelect = useCallback((date) => {
      props.onSelect(date);
      setDisplayDate(date);
    }, [props.onSelect]);

    /**
     * Handle year selection from Years component
     * @param {string} year - The selected year
     * @param {Event} e - The event object
     * @param {Function} callback - Callback function to execute after selection
     */
    const handleYearSelect = useCallback((year, e, callback) => {
      callback(parse(year));
    }, []);

    const selected = useMemo(() => props.selected
      .filter(date => sanitizeDate(date, props))
      .map(date => format(date, 'yyyy-MM-dd')), [props.selected, props]);

    const passThrough = useMemo(() => ({
      Day: {
        onClick: (date) => handleSelect(date),
      },
      Header: {
        setDisplayDate,
      },
      Years: {
        displayDate,
        onSelect: (year, e, callback) => handleYearSelect(year, e, callback),
        selected: displayDate,
      },
    }), [handleSelect, setDisplayDate, displayDate, handleYearSelect]);

    return (
      <Component
        {...restProps}
        DayComponent={enhancedDayComponent}
        HeaderComponent={enhancedHeaderComponent}
        YearsComponent={enhancedYearsComponent}
        scrollDate={scrollDate}
        setScrollDate={setScrollDate}
        displayDate={displayDate}
        setDisplayDate={setDisplayDate}
        passThrough={passThrough}
        selected={selected}
      />
    );
  };
};

function getInitialDate({ selected }) {
  return selected.length ? selected[0] : new Date();
}

export function defaultMultipleDateInterpolation(date, selected) {
  const selectedMap = selected.map(date => format(date, 'yyyy-MM-dd'));
  const index = selectedMap.indexOf(format(date, 'yyyy-MM-dd'));

  return (index === -1)
    ? [...selected, date]
    : [...selected.slice(0, index), ...selected.slice(index + 1)];
}
