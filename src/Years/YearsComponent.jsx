import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { emptyFn } from '../utils/index.jsx';
import styles from './Years.module.scss';

const YearsComponent = ({
  height,
  hideOnSelect,
  locale,
  max,
  maxDate,
  min,
  minDate,
  scrollToDate,
  selected,
  setDisplay,
  showMonths,
  theme,
  today,
  width,
  years,
}) => {
  const node = useRef(null);
  const [selectedYear, setSelectedYear] = useState(selected && selected.getFullYear());

  useEffect(() => {
    if (selected && selected.getFullYear() !== selectedYear) {
      setSelectedYear(selected.getFullYear());
    }
  }, [selected, selectedYear]);

  const handleClick = useCallback((year, e) => {
    e.stopPropagation();

    const date = new Date(year, 0, 1);
    
    scrollToDate(date, 0, true);
    
    if (hideOnSelect) {
      setDisplay('days');
    }
    
    setSelectedYear(year);
  }, [scrollToDate, hideOnSelect, setDisplay]);

  return (
    <ul
      data-testid="calendar-years"
      className={styles.root}
      ref={node}
      style={{ height, width }}
    >
      {years.map((year) => {
        const isActive = year === selectedYear;

        return (
          <li
            key={year}
            className={classNames(styles.year, {
              [styles.active]: isActive,
              [styles.currentYear]: year === today.getFullYear(),
            })}
            onClick={(e) => handleClick(year, e)}
            style={{
              color: isActive ? theme.selectionColor : null,
            }}
          >
            <div className={styles.yearLabel}>{year}</div>
            {showMonths && isActive && (
              <ol className={styles.months}>
                {locale.months.map((month, i) => {
                  const date = new Date(year, i, 1);
                  const isDisabled = date < min || date > max || date < minDate || date > maxDate;

                  return (
                    <li
                      key={`${year}-${i}`}
                      className={classNames(styles.month, {
                        [styles.disabled]: isDisabled,
                      })}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isDisabled) {
                          scrollToDate(date, 0, true);
                          setDisplay('days');
                        }
                      }}
                      style={{
                        color: !isDisabled ? theme.selectionColor : null,
                      }}
                    >
                      {month.substr(0, 3)}
                    </li>
                  );
                })}
              </ol>
            )}
          </li>
        );
      })}
    </ul>
  );
};

YearsComponent.propTypes = {
  height: PropTypes.number.isRequired,
  hideOnSelect: PropTypes.bool,
  locale: PropTypes.object.isRequired,
  max: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date),
  scrollToDate: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Date),
  setDisplay: PropTypes.func.isRequired,
  showMonths: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  years: PropTypes.array.isRequired,
};

export default YearsComponent;
