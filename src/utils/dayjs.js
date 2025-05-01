import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);


export const parse = (date) => {
  if (date instanceof Date) return dayjs(date);
  if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dayjs(date, 'YYYY-MM-DD');
  }
  return dayjs(date);
};

export const format = (date, formatStr) => {
  return dayjs(date).format(formatStr);
};

export const isSameDay = (date1, date2) => {
  return dayjs(date1).isSame(dayjs(date2), 'day');
};

export const isBefore = (date1, date2) => {
  return dayjs(date1).isBefore(dayjs(date2));
};

export const isAfter = (date1, date2) => {
  return dayjs(date1).isAfter(dayjs(date2));
};

export const startOfDay = (date) => {
  return dayjs(date).startOf('day').toDate();
};

export const endOfDay = (date) => {
  return dayjs(date).endOf('day').toDate();
};

export const startOfMonth = (date) => {
  return dayjs(date).startOf('month').toDate();
};

export const addDays = (date, amount) => {
  return dayjs(date).add(amount, 'day').toDate();
};

export const getDay = (date) => {
  return dayjs(date).day();
};

export const getDaysInMonth = (date) => {
  return dayjs(date).daysInMonth();
};

export const getWeek = (startOfYear, date, weekStartsOn) => {
  const start = dayjs(startOfYear).weekday(weekStartsOn);
  return dayjs(date).week() - start.week() + 1;
};

export default dayjs;
