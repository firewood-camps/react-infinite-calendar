import { useCallback, useRef } from 'react';
import { ScrollSpeed } from '../utils/index.jsx';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

/**
 * Custom hook for calendar navigation and control functionality
 * Extracts common calendar control logic into a reusable hook
 * 
 * @param {Object} props - Calendar props and dependencies
 * @param {Date} props.min - Minimum date
 * @param {Date} props.max - Maximum date
 * @param {Date} props.minDate - Minimum selectable date
 * @param {Date} props.maxDate - Maximum selectable date
 * @param {Function} props.monthListRef - Reference to MonthList component
 * @returns {Object} Calendar control methods and utilities
 */
const useCalendarControls = ({ min, max, minDate, maxDate, monthListRef }) => {
  const scrollTop = useRef(0);
  const scrollSpeed = useRef(0);
  
  const minParsed = useRef(parse(min));
  const maxParsed = useRef(parse(max));
  const minDateParsed = useRef(parse(minDate));
  const maxDateParsed = useRef(parse(maxDate));
  
  const getScrollSpeed = useCallback(() => new ScrollSpeed().getScrollSpeed, []);
  
  const getCurrentOffset = useCallback(() => scrollTop.current, []);
  
  const getDateOffset = useCallback((date) => {
    return monthListRef.current && monthListRef.current.getDateOffset(date);
  }, [monthListRef]);
  
  const scrollTo = useCallback((offset) => {
    return monthListRef.current && monthListRef.current.scrollTo(offset);
  }, [monthListRef]);
  
  const scrollToDate = useCallback((date = new Date(), offset, shouldAnimate, onScrollEnd) => {
    return monthListRef.current &&
      monthListRef.current.scrollToDate(
        date,
        offset,
        shouldAnimate,
        onScrollEnd
      );
  }, [monthListRef]);
  
  const getDisabledDates = useCallback((disabledDates) => {
    if (!disabledDates) return null;
    return disabledDates.map(date => {
      try {
        const parsedDate = date instanceof Date ? date : new Date(date);
        return format(parsedDate, 'yyyy-MM-dd');
      } catch (error) {
        console.warn('Invalid date format in disabledDates:', date);
        return null;
      }
    }).filter(Boolean);
  }, []);
  
  const updateScrollPosition = useCallback((newScrollTop, newScrollSpeed) => {
    scrollTop.current = newScrollTop;
    scrollSpeed.current = newScrollSpeed;
  }, []);
  
  return {
    scrollTop,
    scrollSpeed,
    minParsed,
    maxParsed,
    minDateParsed,
    maxDateParsed,
    getScrollSpeed,
    getCurrentOffset,
    getDateOffset,
    scrollTo,
    scrollToDate,
    getDisabledDates,
    updateScrollPosition
  };
};

export default useCalendarControls;
