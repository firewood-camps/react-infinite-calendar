import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import VirtualList from 'react-tiny-virtual-list';
import classNames from 'classnames';
import {
  emptyFn,
  getMonth,
  getWeek,
  getWeeksInMonth,
  animate,
} from '../utils';
import parseISO from 'date-fns/parseISO';
import startOfMonth from 'date-fns/startOfMonth';
import Month from '../Month';
import styles from './MonthList.scss';

const AVERAGE_ROWS_PER_MONTH = 5;

const MonthList = ({
  disabledDates,
  disabledDays,
  height,
  isScrolling,
  locale,
  maxDate,
  min,
  minDate,
  months,
  onDaySelect,
  onScroll,
  overscanMonthCount,
  rowHeight,
  scrollDate,
  selectedDate,
  showOverlay,
  theme,
  today,
  width,
}) => {
  const [scrollTop, setScrollTop] = useState(getDateOffset(scrollDate));
  const cache = useRef({});
  const monthHeights = useRef([]);
  const scrollEl = useRef(null);
  const virtualListRef = useRef(null);

  const memoize = useCallback((param) => {
    if (!cache.current[param]) {
      const { weekStartsOn } = locale;
      const [year, month] = param.split(':');
      const result = getMonth(year, month, weekStartsOn);
      cache.current[param] = result;
    }
    return cache.current[param];
  }, [locale]);

  useEffect(() => {
    scrollEl.current = virtualListRef.current.rootNode;
  }, []);

  useEffect(() => {
    setScrollTop(getDateOffset(scrollDate));
  }, [scrollDate]);

  const getDateOffset = useCallback((date) => {
    const { weekStartsOn } = locale;
    const weeks = getWeek(startOfMonth(min), new Date(date), weekStartsOn);
    return weeks * rowHeight - (height - rowHeight / 2) / 2;
  }, [min, rowHeight, locale, height]);

  const scrollToDate = useCallback((date, offset = 0, ...rest) => {
    const offsetTop = getDateOffset(date);
    scrollTo(offsetTop + offset, ...rest);
  }, [getDateOffset]);

  const scrollTo = useCallback((scrollTop = 0, shouldAnimate = false, onScrollEnd = emptyFn) => {
    const onComplete = () => setTimeout(() => {
      scrollEl.current.style.overflowY = 'auto';
      onScrollEnd();
    });

    scrollEl.current.style.overflowY = 'hidden';

    if (shouldAnimate) {
      animate({
        fromValue: scrollEl.current.scrollTop,
        toValue: scrollTop,
        onUpdate: (scrollTop, callback) => setScrollTop(scrollTop, callback),
        onComplete,
      });
    } else {
      window.requestAnimationFrame(() => {
        scrollEl.current.scrollTop = scrollTop;
        onComplete();
      });
    }
  }, []);

  const getMonthHeight = useCallback((index) => {
    if (!monthHeights.current[index]) {
      const { weekStartsOn } = locale;
      const { month, year } = months[index];
      const weeks = getWeeksInMonth(month, year, weekStartsOn, index === months.length - 1);
      const height = weeks * rowHeight;
      monthHeights.current[index] = height;
    }
    return monthHeights.current[index];
  }, [locale, months, rowHeight]);

  const renderMonth = useCallback(({ index, style }) => {
    const { month, year } = months[index];
    const key = `${year}:${month}`;
    const { date, rows } = memoize(key);

    return (
      <Month
        key={key}
        selected={selectedDate}
        DayComponent={DayComponent}
        monthDate={date}
        disabledDates={disabledDates}
        disabledDays={disabledDays}
        maxDate={maxDate}
        minDate={minDate}
        rows={rows}
        rowHeight={rowHeight}
        isScrolling={false}
        showOverlay={showOverlay}
        today={today}
        theme={theme}
        style={style}
        locale={locale}
        passThrough={passThrough}
        {...passThrough.Month}
      />
    );
  }, [memoize, months, selectedDate, disabledDates, disabledDays, maxDate, minDate, rowHeight, showOverlay, today, theme, locale, passThrough]);

  return (
    <VirtualList
      ref={virtualListRef}
      width={width}
      height={height}
      itemCount={months.length}
      itemSize={getMonthHeight}
      estimatedItemSize={rowHeight * AVERAGE_ROWS_PER_MONTH}
      renderItem={renderMonth}
      onScroll={onScroll}
      scrollOffset={scrollTop}
      className={classNames(styles.root, { [styles.scrolling]: isScrolling })}
      style={{ lineHeight: `${rowHeight}px` }}
      overscanCount={overscanMonthCount}
    />
  );
};

MonthList.propTypes = {
  disabledDates: PropTypes.arrayOf(PropTypes.string),
  disabledDays: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.number.isRequired,
  isScrolling: PropTypes.bool,
  locale: PropTypes.object.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date),
  months: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDaySelect: PropTypes.func,
  onScroll: PropTypes.func,
  overscanMonthCount: PropTypes.number,
  rowHeight: PropTypes.number.isRequired,
  scrollDate: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  showOverlay: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default MonthList;
