import React, { useState, useEffect, useCallback } from 'react';
import Calendar from './Calendar';
import { withDateSelection } from './Calendar/withDateSelection';

export { default as Calendar } from './Calendar';
export { withDateSelection } from './Calendar/withDateSelection';
export { withKeyboardSupport } from './Calendar/withKeyboardSupport';
export { withMultipleDates, defaultMultipleDateInterpolation } from './Calendar/withMultipleDates';
export { withRange, EVENT_TYPE } from './Calendar/withRange';

/*
 * By default, Calendar is a controlled component.
 * Export a sensible default for minimal setup
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
  }, [selectedProp]);

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
