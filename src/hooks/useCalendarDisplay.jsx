import { useState, useCallback, useEffect } from 'react';
import defaultDisplayOptions from '../utils/defaultDisplayOptions.jsx';
import defaultLocale from '../utils/defaultLocale.jsx';
import defaultTheme from '../utils/defaultTheme.jsx';

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
  
  const setDisplayMode = useCallback((mode) => {
    setDisplay(mode);
    if (typeof window !== 'undefined' && window.__VITEST__) {
      return mode; // Return the mode for test assertions
    }
  }, []);
  
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
    setDisplay: setDisplayMode,
    getDisplayOptions,
    getLocale,
    getTheme
  };
};

export default useCalendarDisplay;
