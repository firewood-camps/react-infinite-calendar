import React from 'react';
import PropTypes from 'prop-types';
import { scrollbarSize } from '../utils/index.jsx';
import styles from './Weekdays.module.scss';

const Weekdays = ({ weekdays, weekStartsOn, theme }) => {
  const orderedWeekdays = [...weekdays.slice(weekStartsOn, 7), ...weekdays.slice(0, weekStartsOn)];

  return (
    <ul
      data-testid="calendar-weekdays"
      className={styles.root}
      style={{
        backgroundColor: theme.weekdayColor,
        color: theme.textColor.active,
        paddingRight: scrollbarSize,
      }}
      aria-hidden={true}
    >
      {orderedWeekdays.map((val, index) => (
        <li key={`Weekday-${index}`} className={styles.day}>{val}</li>
      ))}
    </ul>
  );
};

Weekdays.propTypes = {
  weekdays: PropTypes.arrayOf(PropTypes.string).isRequired,
  weekStartsOn: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    weekdayColor: PropTypes.string.isRequired,
    textColor: PropTypes.shape({
      active: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Weekdays;
