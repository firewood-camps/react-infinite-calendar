import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { withDefaultProps } from './';
import { withImmutableProps } from '../utils';
import isBefore from 'date-fns/isBefore';
import enhanceHeader from '../Header/withRange';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import styles from '../Day/Day.scss';

let isTouchDevice = false;

/**
 * Event types for range selection
 * Used to identify the type of selection event that occurred
 */
export const EVENT_TYPE = {
  END: 3,   // End date selection
  HOVER: 2, // Hover during selection
  START: 1, // Start date selection
};

/**
 * Enhance Day component to display selected state based on date range
 * Adds visual styling for start, end, and in-between dates in a range
 * 
 * @param {Function} DayComponent - The base Day component to enhance
 * @returns {Function} Enhanced Day component with range selection support
 */
const enhanceDay = (DayComponent) => (props) => {
  const { date, selected, theme } = props;
  const isSelected = date >= selected.start && date <= selected.end;
  const isStart = date === selected.start;
  const isEnd = date === selected.end;
  const isRange = !(isStart && isEnd);
  const style = isRange && (isStart && { backgroundColor: theme.accentColor } || isEnd && { borderColor: theme.accentColor });

  return (
    <DayComponent
      {...props}
      className={isSelected && isRange && classNames(styles.range, {
        [styles.start]: isStart,
        [styles.betweenRange]: !isStart && !isEnd,
        [styles.end]: isEnd,
      })}
      isSelected={isSelected}
      selectionStyle={style}
    />
  );
};

/**
 * Higher-order component that adds date range selection functionality
 * Converts a base Calendar component into one that supports selecting date ranges
 * 
 * @param {Function} Component - The base Calendar component to enhance
 * @returns {Function} Enhanced Calendar component with date range selection support
 */
export const withRange = (Component) => {
  return (props) => {
    const { DayComponent, HeaderComponent, YearsComponent, selected: selectedProp, onSelect, ...restProps } = props;
    const [scrollDate, setScrollDate] = useState(getInitialDate(props));
    const [displayKey, setDisplayKey] = useState('start');
    const [selectionStart, setSelectionStart] = useState(null);

    const enhancedDayComponent = useMemo(() => enhanceDay(DayComponent), [DayComponent]);
    const enhancedHeaderComponent = useMemo(() => enhanceHeader(HeaderComponent), [HeaderComponent]);

    /**
     * Handle date selection for range
     * Manages start and end date selection states
     * 
     * @param {Date} date - The selected date
     */
    const handleSelect = useCallback((date) => {
      if (selectionStart) {
        onSelect({
          eventType: EVENT_TYPE.END,
          ...getSortedSelection({
            start: selectionStart,
            end: date,
          }),
        });
        setSelectionStart(null);
      } else {
        onSelect({ eventType: EVENT_TYPE.START, start: date, end: date });
        setSelectionStart(date);
      }
    }, [onSelect, selectionStart]);

    /**
     * Handle mouse over events during range selection
     * Updates the visual range as user hovers over dates
     * 
     * @param {Event} e - The mouse event object
     */
    const handleMouseOver = useCallback((e) => {
      const dateStr = e.target.getAttribute('data-date');
      const date = dateStr && parse(dateStr);

      if (!date) { return; }

      onSelect({
        eventType: EVENT_TYPE.HOVER,
        ...getSortedSelection({
          start: selectionStart,
          end: date,
        }),
      });
    }, [onSelect, selectionStart]);

    /**
     * Handle year selection from Years component
     * Updates the appropriate date (start or end) based on displayKey
     * 
     * @param {Date} date - The selected year date
     */
    const handleYearSelect = useCallback((date) => {
      setScrollDate(date);
      onSelect(getSortedSelection(
        Object.assign({}, selectedProp, { [displayKey]: parse(date) }))
      );
    }, [displayKey, onSelect, selectedProp]);

    const selected = useMemo(() => ({
      start: selectedProp && format(selectedProp.start, 'yyyy-MM-dd'),
      end: selectedProp && format(selectedProp.end, 'yyyy-MM-dd'),
    }), [selectedProp]);

    const passThrough = useMemo(() => ({
      Day: {
        onClick: (date) => handleSelect(date),
        handlers: {
          onMouseOver: !isTouchDevice && selectionStart
            ? (e) => handleMouseOver(e)
            : null,
        },
      },
      Years: {
        selected: selectedProp && selectedProp[displayKey],
        onSelect: (date) => handleYearSelect(date),
      },
      Header: {
        onYearClick: (date, e, key) => setDisplayKey(key || 'start'),
      },
    }), [handleSelect, handleMouseOver, handleYearSelect, displayKey, selectionStart, selectedProp]);

    return (
      <Component
        {...restProps}
        DayComponent={enhancedDayComponent}
        HeaderComponent={enhancedHeaderComponent}
        scrollDate={scrollDate}
        setScrollDate={setScrollDate}
        displayKey={displayKey}
        setDisplayKey={setDisplayKey}
        selectionStart={selectionStart}
        setSelectionStart={setSelectionStart}
        passThrough={passThrough}
        selected={selected}
      />
    );
  };
};

/**
 * Ensures that start date is always before end date
 * Returns a sorted selection object with start and end dates in chronological order
 * 
 * @param {Object} selection - The selection object with start and end dates
 * @param {Date} selection.start - The start date of the selection
 * @param {Date} selection.end - The end date of the selection
 * @returns {Object} Sorted selection with start date before end date
 */
function getSortedSelection({ start, end }) {
  return isBefore(start, end)
    ? { start, end }
    : { start: end, end: start };
}

/**
 * Gets the initial date for the calendar
 * Uses the start date from selected range or defaults to current date
 * 
 * @param {Object} props - Component props
 * @param {Object} props.selected - The selected date range
 * @returns {Date} Initial date for the calendar
 */
function getInitialDate({ selected }) {
  return selected && selected.start || new Date();
}

if (typeof window !== 'undefined') {
  window.addEventListener('touchstart', function onTouch() {
    isTouchDevice = true;

    window.removeEventListener('touchstart', onTouch, false);
  });
}
