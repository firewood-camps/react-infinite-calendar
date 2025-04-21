import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce, emptyFn, range, ScrollSpeed } from '../utils';
import { defaultProps } from 'recompose';
import defaultDisplayOptions from '../utils/defaultDisplayOptions';
import defaultLocale from '../utils/defaultLocale';
import defaultTheme from '../utils/defaultTheme';
import Today, { DIRECTION_UP, DIRECTION_DOWN } from '../Today';
import Header from '../Header';
import MonthList from '../MonthList';
import Weekdays from '../Weekdays';
import Years from '../Years';
import Day from '../Day';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import startOfDay from 'date-fns/startOfDay';

const styles = {
  container: require('./Container.scss'),
  day: require('../Day/Day.scss'),
};

export const withDefaultProps = defaultProps({
  autoFocus: true,
  DayComponent: Day,
  display: 'days',
  displayOptions: {},
  HeaderComponent: Header,
  height: 500,
  keyboardSupport: true,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: emptyFn,
  onScroll: emptyFn,
  onScrollEnd: emptyFn,
  onSelect: emptyFn,
  passThrough: {},
  rowHeight: 56,
  tabIndex: 1,
  width: 400,
  YearsComponent: Years,
});

/**
 * Calendar component - renders an infinite scrolling calendar
 * Converted from class component to functional component with hooks
 */
const Calendar = (props) => {
  const [display, setDisplayState] = useState(props.display);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showToday, setShowToday] = useState(false);
  
  const node = useRef(null);
  const monthListRef = useRef(null);
  const yearsRef = useRef(null);
  const scrollTop = useRef(0);
  const scrollSpeed = useRef(0);
  const todayOffset = useRef(null);
  const months = useRef([]);
  const minDate = useRef(null);
  const maxDate = useRef(null);
  const min = useRef(null);
  const max = useRef(null);
  const today = useRef(startOfDay(new Date()));
  
  const getScrollSpeed = useMemo(() => new ScrollSpeed().getScrollSpeed, []);
  
  const updateYears = useCallback((propsToUse = props) => {
    min.current = parse(propsToUse.min);
    max.current = parse(propsToUse.max);
    minDate.current = parse(propsToUse.minDate);
    maxDate.current = parse(propsToUse.maxDate);

    const minYear = min.current.getFullYear();
    const minMonth = min.current.getMonth();
    const maxYear = max.current.getFullYear();
    const maxMonth = max.current.getMonth();

    const monthsArray = [];
    for (let year = minYear; year <= maxYear; year++) {
      for (let month = 0; month < 12; month++) {
        if ((year === minYear && month < minMonth) || (year === maxYear && month > maxMonth)) {
          continue;
        }
        monthsArray.push({ month, year });
      }
    }

    months.current = monthsArray;
  }, [props.min, props.max, props.minDate, props.maxDate]);

  useEffect(() => {
    updateYears();
    
    if (props.autoFocus && node.current) {
      node.current.focus();
    }
  }, []);
  
  useEffect(() => {
    if (props.display !== display) {
      setDisplayState(props.display);
    }
  }, [props.display]);
  
  useEffect(() => {
    updateYears();
  }, [props.min, props.minDate, props.max, props.maxDate]);
  
  const getDisabledDates = useCallback((disabledDates) => {
    return disabledDates && disabledDates.map(date => format(parse(date), 'yyyy-MM-dd'));
  }, []);

  const getDisplayOptions = useCallback((displayOptions = props.displayOptions) => {
    return { ...defaultDisplayOptions, ...displayOptions };
  }, [props.displayOptions]);

  const getLocale = useCallback(() => {
    return { ...defaultLocale, ...props.locale };
  }, [props.locale]);

  const getTheme = useCallback(() => {
    return { ...defaultTheme, ...props.theme };
  }, [props.theme]);

  const getCurrentOffset = useCallback(() => scrollTop.current, []);

  const getDateOffset = useCallback((date) => {
    return monthListRef.current && monthListRef.current.getDateOffset(date);
  }, []);

  const scrollTo = useCallback((offset) => {
    return monthListRef.current && monthListRef.current.scrollTo(offset);
  }, []);

  const scrollToDate = useCallback((date = new Date(), offset, shouldAnimate) => {
    return monthListRef.current &&
      monthListRef.current.scrollToDate(
        date,
        offset,
        shouldAnimate && props.display === 'days',
        () => setIsScrolling(false)
      );
  }, [props.display]);

  const handleScrollEnd = useCallback(debounce(() => {
    const { onScrollEnd } = props;
    const { showTodayHelper } = getDisplayOptions();

    if (isScrolling) {
      setIsScrolling(false);
    }

    if (showTodayHelper) {
      updateTodayHelperPosition(0);
    }

    onScrollEnd(scrollTop.current);
  }, 150), [props.onScrollEnd, isScrolling, getDisplayOptions]);

  const updateTodayHelperPosition = useCallback((speed) => {
    const currentScrollTop = scrollTop.current;
    const { height, rowHeight } = props;
    const { todayHelperRowOffset } = getDisplayOptions();
    let newState;

    if (!todayOffset.current) {
      todayOffset.current = getDateOffset(today.current);
    }

    if (currentScrollTop >= todayOffset.current + (height - rowHeight) / 2 + rowHeight * todayHelperRowOffset) {
      if (showToday !== DIRECTION_UP) newState = DIRECTION_UP;
    } else if (currentScrollTop <= todayOffset.current - height / 2 - rowHeight * (todayHelperRowOffset + 1)) {
      if (showToday !== DIRECTION_DOWN) newState = DIRECTION_DOWN;
    } else if (showToday && speed <= 1) {
      newState = false;
    }

    if (currentScrollTop === 0) {
      newState = false;
    }

    if (newState != null) {
      setShowToday(newState);
    }
  }, [props.height, props.rowHeight, getDisplayOptions, getDateOffset, showToday]);

  const handleScroll = useCallback((scrollTopValue, e) => {
    const { onScroll, rowHeight } = props;
    const { showTodayHelper, showOverlay } = getDisplayOptions();
    const speed = Math.abs(getScrollSpeed(scrollTopValue));
    scrollSpeed.current = speed;
    scrollTop.current = scrollTopValue;

    if (showOverlay && speed > rowHeight && !isScrolling) {
      setIsScrolling(true);
    }

    if (showTodayHelper) {
      updateTodayHelperPosition(speed);
    }

    onScroll(scrollTopValue, e);
    handleScrollEnd();
  }, [props.onScroll, props.rowHeight, getDisplayOptions, isScrolling, updateTodayHelperPosition, handleScrollEnd]);

  const setDisplay = useCallback((newDisplay) => {
    setDisplayState(newDisplay);
  }, []);

  const {
    className,
    passThrough,
    DayComponent,
    disabledDays,
    displayDate,
    height,
    HeaderComponent,
    rowHeight,
    scrollDate,
    selected,
    tabIndex,
    width,
    YearsComponent,
  } = props;
  
  const {
    hideYearsOnSelect,
    layout,
    overscanMonthCount,
    shouldHeaderAnimate,
    showHeader,
    showMonthsForYears,
    showOverlay,
    showTodayHelper,
    showWeekdays,
  } = getDisplayOptions();
  
  const disabledDates = getDisabledDates(props.disabledDates);
  const locale = getLocale();
  const theme = getTheme();
  
  today.current = startOfDay(new Date());

  return (
    <div
      tabIndex={tabIndex}
      className={classNames(className, styles.container.root, {
        [styles.container.landscape]: layout === 'landscape',
      })}
      style={{ color: theme.textColor.default, width }}
      aria-label="Calendar"
      ref={node}
      {...passThrough.rootNode}
    >
      {showHeader &&
        <HeaderComponent
          selected={selected}
          shouldAnimate={Boolean(shouldHeaderAnimate && display !== 'years')}
          layout={layout}
          theme={theme}
          locale={locale}
          scrollToDate={scrollToDate}
          setDisplay={setDisplay}
          dateFormat={locale.headerFormat}
          display={display}
          displayDate={displayDate}
          {...passThrough.Header}
        />
      }
      <div className={styles.container.wrapper}>
        {showWeekdays &&
          <Weekdays weekdays={locale.weekdays} weekStartsOn={locale.weekStartsOn} theme={theme} />
        }
        <div className={styles.container.listWrapper}>
          {showTodayHelper &&
            <Today
              scrollToDate={scrollToDate}
              show={showToday}
              today={today.current}
              theme={theme}
              todayLabel={locale.todayLabel.long}
            />
          }
          <MonthList
            ref={monthListRef}
            DayComponent={DayComponent}
            disabledDates={disabledDates}
            disabledDays={disabledDays}
            height={height}
            isScrolling={isScrolling}
            locale={locale}
            maxDate={maxDate.current}
            min={min.current}
            minDate={minDate.current}
            months={months.current}
            onScroll={handleScroll}
            overscanMonthCount={overscanMonthCount}
            passThrough={passThrough}
            theme={theme}
            today={today.current}
            rowHeight={rowHeight}
            selected={selected}
            scrollDate={scrollDate}
            showOverlay={showOverlay}
            width={width}
          />
        </div>
        {display === 'years' &&
          <YearsComponent
            ref={yearsRef}
            height={height}
            hideOnSelect={hideYearsOnSelect}
            locale={locale}
            max={max.current}
            maxDate={maxDate.current}
            min={min.current}
            minDate={minDate.current}
            scrollToDate={scrollToDate}
            selected={selected}
            setDisplay={setDisplay}
            showMonths={showMonthsForYears}
            theme={theme}
            today={today.current}
            width={width}
            years={range(min.current.getFullYear(), max.current.getFullYear() + 1)}
            {...passThrough.Years}
          />
        }
      </div>
    </div>
  );
};

Calendar.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  DayComponent: PropTypes.func,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  disabledDays: PropTypes.arrayOf(PropTypes.number),
  display: PropTypes.oneOf(['years', 'days']),
  displayOptions: PropTypes.shape({
    hideYearsOnSelect: PropTypes.bool,
    layout: PropTypes.oneOf(['portrait', 'landscape']),
    overscanMonthCount: PropTypes.number,
    shouldHeaderAnimate: PropTypes.bool,
    showHeader: PropTypes.bool,
    showMonthsForYears: PropTypes.bool,
    showOverlay: PropTypes.bool,
    showTodayHelper: PropTypes.bool,
    showWeekdays: PropTypes.bool,
    todayHelperRowOffset: PropTypes.number,
  }),
  height: PropTypes.number,
  keyboardSupport: PropTypes.bool,
  locale: PropTypes.shape({
    blank: PropTypes.string,
    headerFormat: PropTypes.string,
    todayLabel: PropTypes.shape({
      long: PropTypes.string,
      short: PropTypes.string,
    }),
    weekdays: PropTypes.arrayOf(PropTypes.string),
    weekStartsOn: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  }),
  max: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onScroll: PropTypes.func,
  onScrollEnd: PropTypes.func,
  onSelect: PropTypes.func,
  rowHeight: PropTypes.number,
  tabIndex: PropTypes.number,
  theme: PropTypes.shape({
    floatingNav: PropTypes.shape({
      background: PropTypes.string,
      chevron: PropTypes.string,
      color: PropTypes.string,
    }),
    headerColor: PropTypes.string,
    selectionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    textColor: PropTypes.shape({
      active: PropTypes.string,
      default: PropTypes.string,
    }),
    todayColor: PropTypes.string,
    weekdayColor: PropTypes.string,
  }),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  YearsComponent: PropTypes.func,
};

export default Calendar;
