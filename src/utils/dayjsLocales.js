import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Import French locale as an example

export const mapLocale = (dateLocale) => {
  if (!dateLocale) return 'en';
  
  const localeMap = {
    'fr': 'fr',
  };
  
  if (dateLocale && dateLocale.code) {
    return localeMap[dateLocale.code] || 'en';
  }
  
  return 'en';
};

export const setLocale = (locale) => {
  if (locale && locale.locale) {
    const localeCode = mapLocale(locale.locale);
    dayjs.locale(localeCode);
  }
};

export const getLocaleHelpers = (locale) => {
  if (!locale) return null;
  
  setLocale(locale);
  
  return locale;
};
