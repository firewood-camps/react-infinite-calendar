import { useState, useCallback, useEffect } from 'react';
import defaultDisplayOptions from '../utils/defaultDisplayOptions';
import defaultLocale from '../utils/defaultLocale';
import defaultTheme from '../utils/defaultTheme';

/**
 * Custom hook for managing calendar display options, locale, and theme
 * Centralizes display-related functionality for calendar components
 * 
 * @param {Object} props - Calendar props
 * @param {string} props.display - Initial display mode ('days' or 'years')
 * @param {Object} props.displayOptions - Custom display options
 * @param {Object} props.locale - Custom locale settings
 * @param {Object} props.theme - Custom theme settings
 * @returns {Object} Display state and utility functions
 */
const useCalendarDisplay = ({ display: initialDisplay, displayOptions, locale, theme }) => {
  const [display, setDisplay] = useState(initialDisplay);
  
  useEffect(() => {
    if (initialDisplay !== display) {
      setDisplay(initialDisplay);
    }
  }, [initialDisplay, display]);
  
  const getDisplayOptions = useCallback((options = displayOptions) => {
    return { ...defaultDisplayOptions, ...options };
  }, [displayOptions]);
  
  const getLocale = useCallback(() => {
    return { ...defaultLocale, ...locale };
  }, [locale]);
  
  const getTheme = useCallback(() => {
    return { ...defaultTheme, ...theme };
  }, [theme]);
  
  return {
    display,
    setDisplay,
    getDisplayOptions,
    getLocale,
    getTheme
  };
};

export default useCalendarDisplay;
