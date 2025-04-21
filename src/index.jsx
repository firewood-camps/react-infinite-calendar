import React, { useState, useEffect, useCallback } from 'react';
import Calendar from './Calendar/index.jsx';
import { withDateSelection } from './Calendar/withDateSelection.jsx';

export { default as Calendar } from './Calendar/index.jsx';
export { withDateSelection } from './Calendar/withDateSelection.jsx';
export { withKeyboardSupport } from './Calendar/withKeyboardSupport.jsx';
export { withMultipleDates, defaultMultipleDateInterpolation } from './Calendar/withMultipleDates.jsx';
export { withRange, EVENT_TYPE } from './Calendar/withRange.jsx';

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
