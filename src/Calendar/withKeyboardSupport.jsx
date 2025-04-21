import React, { useState, useCallback, useMemo } from 'react';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import { keyCodes, withImmutableProps } from '../utils';

const enhanceDay = (DayComponent) => (props) => {
  const isHighlighted = props.highlightedDate === props.date;
  return <DayComponent {...props} isHighlighted={isHighlighted} />;
};

export const withKeyboardSupport = (Component) => {
  return (props) => {
    const { DayComponent, minDate, maxDate, selected, displayDate, passThrough: initialPassThrough } = props;
    const [highlightedDate, setHighlight] = useState(selected || new Date());
    const setScrollDate = useCallback((date) => {
      // Implement scroll date logic here if needed
    }, []);

    const handleKeyDown = useCallback((e) => {
      handleKeyDownInternal(e, {
        minDate,
        maxDate,
        passThrough: { Day: { onClick: initialPassThrough.Day.onClick } },
        setScrollDate,
        setHighlight,
        highlightedDate,
        selected,
        displayDate,
      });
    }, [highlightedDate, minDate, maxDate, initialPassThrough, setScrollDate, setHighlight, selected, displayDate]);

    const enhancedDayComponent = useMemo(() => enhanceDay(DayComponent), [DayComponent]);

    const formattedHighlightedDate = highlightedDate ? format(highlightedDate, 'yyyy-MM-dd') : null;

    const passThrough = useMemo(() => ({
      ...initialPassThrough,
      Day: {
        ...initialPassThrough.Day,
        highlightedDate: formattedHighlightedDate,
        onClick: (date) => {
          setHighlight(null);
          initialPassThrough.Day.onClick(date);
        },
      },
      rootNode: { onKeyDown: handleKeyDown },
    }), [initialPassThrough, formattedHighlightedDate, handleKeyDown]);

    return (
      <Component
        {...props}
        DayComponent={enhancedDayComponent}
        highlightedDate={highlightedDate}
        setHighlight={setHighlight}
        passThrough={passThrough}
      />
    );
  };
};

function handleKeyDownInternal(e, props) {
  const {
    minDate,
    maxDate,
    passThrough: { Day: { onClick } },
    setScrollDate,
    setHighlight,
    highlightedDate,
    selected,
    displayDate,
  } = props;

  const initialDate = highlightedDate || selected.start || displayDate || selected || new Date();
  let delta = 0;

  if ([keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  switch (e.keyCode) {
    case keyCodes.enter:
      onClick && onClick(initialDate);
      return;
    case keyCodes.left:
      delta = -1;
      break;
    case keyCodes.right:
      delta = +1;
      break;
    case keyCodes.down:
      delta = +7;
      break;
    case keyCodes.up:
      delta = -7;
      break;
    default:
      delta = 0;
  }

  if (delta) {
    let newHighlightedDate = addDays(initialDate, delta);

    // Make sure the new highlighted date isn't before min / max
    if (isBefore(newHighlightedDate, minDate)) {
      newHighlightedDate = new Date(minDate);
    } else if (isAfter(newHighlightedDate, maxDate)) {
      newHighlightedDate = new Date(maxDate);
    }

    setScrollDate(newHighlightedDate);
    setHighlight(newHighlightedDate);
  }
}
