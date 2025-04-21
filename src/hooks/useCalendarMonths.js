import { useCallback, useRef, useEffect } from 'react';
import { range } from '../utils';
import parse from 'date-fns/parse';

/**
 * Custom hook for managing calendar months data
 * Handles month generation based on min/max date constraints
 * 
 * @param {Object} props - Calendar props
 * @param {Date} props.min - Minimum date
 * @param {Date} props.max - Maximum date
 * @returns {Object} Months data and utility functions
 */
const useCalendarMonths = ({ min, max }) => {
  const minDate = useRef(null);
  const maxDate = useRef(null);
  const months = useRef([]);
  
  const updateMonths = useCallback((minValue = min, maxValue = max) => {
    minDate.current = parse(minValue);
    maxDate.current = parse(maxValue);

    const minYear = minDate.current.getFullYear();
    const minMonth = minDate.current.getMonth();
    const maxYear = maxDate.current.getFullYear();
    const maxMonth = maxDate.current.getMonth();

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
    return months.current;
  }, [min, max]);
  
  const getYearsRange = useCallback(() => {
    if (!minDate.current || !maxDate.current) {
      updateMonths();
    }
    return range(minDate.current.getFullYear(), maxDate.current.getFullYear() + 1);
  }, [updateMonths]);
  
  useEffect(() => {
    updateMonths();
  }, [updateMonths]);
  
  return {
    months,
    minDate,
    maxDate,
    updateMonths,
    getYearsRange
  };
};

export default useCalendarMonths;
