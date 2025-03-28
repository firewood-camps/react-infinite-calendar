import React, { useState, useEffect } from 'react';
import Calendar from '../Calendar';
import { withDateSelection } from '../Calendar/withDateSelection';
import { withKeyboardSupport } from '../Calendar/withKeyboardSupport';
import { withMultipleDates, defaultMultipleDateInterpolation } from '../Calendar/withMultipleDates';
import { withRange, EVENT_TYPE } from '../Calendar/withRange';

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

  const handleSelect = (selected) => {
    if (typeof onSelect === 'function') {
      onSelect(selected);
    }
    setSelected(interpolateSelection(selected, selected));
  };

  return (
    <Component
      {...props}
      onSelect={handleSelect}
      selected={selected}
    />
  );
};

export { Calendar };
export { withDateSelection };
export { withKeyboardSupport };
export { withMultipleDates, defaultMultipleDateInterpolation };
export { withRange, EVENT_TYPE };

export default DefaultCalendar;
