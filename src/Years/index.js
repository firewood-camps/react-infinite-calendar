import React, { useState, useEffect, useCallback } from 'react';
import Calendar from './Calendar';
import { withDateSelection } from './Calendar/withDateSelection';

export { default as Calendar } from './Calendar';
export { withDateSelection } from './Calendar/withDateSelection';
export { withKeyboardSupport } from './Calendar/withKeyboardSupport';
export { withMultipleDates, defaultMultipleDateInterpolation } from './Calendar/withMultipleDates';
export { withRange, EVENT_TYPE } from './Calendar/withRange';

/**
 * DefaultCalendar - A controlled calendar component with sensible defaults
 * Provides date selection functionality with customizable selection behavior
 * 
 * @param {Object} props - Component props
 * @param {Function} props.Component - Base calendar component to enhance (default: withDateSelection(Calendar))
 * @param {Function} props.interpolateSelection - Function to transform selection (default: identity function)
 * @param {Date} props.selected - Optional pre-selected date
 * @param {Function} props.onSelect - Optional callback for selection changes
 */
const DefaultCalendar = ({
  selected: selectedProp,
  onSelect,
  interpolateSelection = (selected) => selected,
  Component = withDateSelection(Calendar),
  ...props
}) => {
  const [selected, setSelected] = useState(selectedProp || new Date());
  
  useEffect(() => {
    if (selectedProp !== selected) {
      setSelected(selectedProp);
    }
  }, [selectedProp, selected]);
  
  const handleSelect = useCallback(
    (selected) => {
      if (typeof onSelect === 'function') {
        onSelect(selected);
      }
      setSelected(interpolateSelection(selected, selected));
    },
    [onSelect, interpolateSelection]
  );
  
  return (
    <Component
      {...props}
      onSelect={handleSelect}
      selected={selected}
    />
  );
};

export default DefaultCalendar;
