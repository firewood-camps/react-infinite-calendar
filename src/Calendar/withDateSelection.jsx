import React, { useState, useMemo, useCallback } from 'react';
import { withDefaultProps } from './';
import { sanitizeDate, withImmutableProps } from '../utils';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

const enhanceDay = (DayComponent) => (props) => {
  const isSelected = props.selected === props.date;
  return <DayComponent {...props} isSelected={isSelected} />;
};

const enhanceYear = (YearsComponent) => (props) => {
  const selected = parse(props.selected);
  return <YearsComponent {...props} selected={selected} />;
};

export const withDateSelection = (Component) => {
  return (props) => {
    const {
      DayComponent,
      onSelect,
      YearsComponent,
      selected: selectedProp,
      ...restProps
    } = props;

    const [scrollDate, setScrollDate] = useState(selectedProp || new Date());

    const enhancedDayComponent = useMemo(() => enhanceDay(DayComponent), [DayComponent]);
    const enhancedYearsComponent = useMemo(() => enhanceYear(YearsComponent), [YearsComponent]);

    const selected = useMemo(() => sanitizeDate(selectedProp, props), [selectedProp, props]);

    const handleYearSelect = useCallback((date) => {
      const newDate = parse(date);
      onSelect(newDate);
      setScrollDate(newDate);
    }, [onSelect]);

    const passThrough = useMemo(() => ({
      Day: { onClick: onSelect },
      Years: { onSelect: handleYearSelect },
    }), [onSelect, handleYearSelect]);

    const formattedSelected = selected ? format(selected, 'yyyy-MM-dd') : null;

    return (
      <Component
        {...restProps}
        DayComponent={enhancedDayComponent}
        YearsComponent={enhancedYearsComponent}
        selected={formattedSelected}
        scrollDate={scrollDate}
        setScrollDate={setScrollDate}
        passThrough={passThrough}
      />
    );
  };
};
