import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { withDefaultProps } from './';
import { withImmutableProps } from '../utils';
import isBefore from 'date-fns/isBefore';
import enhanceHeader from '../Header/withRange';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import styles from '../Day/Day.scss';

let isTouchDevice = false;

export const EVENT_TYPE = {
  END: 3,
  HOVER: 2,
  START: 1,
};

// Enhance Day component to display selected state based on an array of selected dates
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

// Enhancer to handle selecting and displaying multiple dates
export const withRange = (Component) => {
  return (props) => {
    const { DayComponent, HeaderComponent, YearsComponent, selected: selectedProp, onSelect, ...restProps } = props;
    const [scrollDate, setScrollDate] = useState(getInitialDate(props));
    const [displayKey, setDisplayKey] = useState('start');
    const [selectionStart, setSelectionStart] = useState(null);

    const enhancedDayComponent = useMemo(() => enhanceDay(DayComponent), [DayComponent]);
    const enhancedHeaderComponent = useMemo(() => enhanceHeader(HeaderComponent), [HeaderComponent]);

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

    const handleMouseOver = useCallback((e) => {
      const dateStr = e.target.getAttribute('data-date');
      const date = dateStr && new Date(dateStr);

      if (!date) { return; }

      onSelect({
        eventType: EVENT_TYPE.HOVER,
        ...getSortedSelection({
          start: selectionStart,
          end: date,
        }),
      });
    }, [onSelect, selectionStart]);

    const handleYearSelect = useCallback((date) => {
      setScrollDate(date);
      onSelect(getSortedSelection(
        Object.assign({}, selectedProp, { [displayKey]: new Date(date) }))
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

function getSortedSelection({ start, end }) {
  return isBefore(start, end)
    ? { start, end }
    : { start: end, end: start };
}

function getInitialDate({ selected }) {
  return selected && selected.start || new Date();
}

if (typeof window !== 'undefined') {
  window.addEventListener('touchstart', function onTouch() {
    isTouchDevice = true;

    window.removeEventListener('touchstart', onTouch, false);
  });
}
