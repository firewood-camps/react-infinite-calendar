import React, { useMemo } from 'react';
import classNames from 'classnames';
import { getDateString } from '../utils';
import { format, getDay } from '../utils/dayjs';
import dayjs from '../utils/dayjs';
import styles from './Month.scss';

const Month = ({
  DayComponent,
  disabledDates,
  disabledDays,
  monthDate,
  locale,
  maxDate,
  minDate,
  rowHeight,
  rows,
  selected,
  today,
  theme,
  passThrough,
  showOverlay,
  style,
}) => {
  const renderRows = useMemo(() => {
    const currentYear = today.getFullYear();
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const monthShort = format(monthDate, 'MMM', { locale: locale.locale });
    const monthRows = [];
    const _today = format(today, 'yyyy-MM-dd');
    const _minDate = format(minDate, 'yyyy-MM-dd');
    const _maxDate = format(maxDate, 'yyyy-MM-dd');

    for (let i = 0, len = rows.length; i < len; i++) {
      const row = rows[i];
      const days = [];
      let dow = getDay(new Date(year, month, row[0]));

      for (let k = 0, len = row.length; k < len; k++) {
        const day = row[k];
        const date = getDateString(year, month, day);
        const isToday = (date === _today);

        const isDisabled = (
          (minDate && date < _minDate) ||
          (maxDate && date > _maxDate) ||
          (disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1) ||
          (disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1)
        );

        days[k] = (
          <DayComponent
            key={`day-${day}`}
            currentYear={currentYear}
            date={date}
            day={day}
            selected={selected}
            isDisabled={isDisabled}
            isToday={isToday}
            locale={locale}
            month={month}
            monthShort={monthShort}
            theme={theme}
            year={year}
            {...passThrough.Day}
          />
        );

        dow += 1;
      }

      monthRows[i] = (
        <ul
          key={`Row-${i}`}
          className={classNames(styles.row, { [styles.partial]: row.length !== 7 })}
          style={{ height: rowHeight }}
          role="row"
          aria-label={`Week ${i + 1}`}
        >
          {days}
        </ul>
      );
    }

    return monthRows;
  }, [DayComponent, disabledDates, disabledDays, monthDate, locale, maxDate, minDate, rowHeight, rows, selected, today, theme, passThrough]);

  const dateFormat = dayjs(monthDate).isSame(dayjs(today), 'year') ? 'MMMM' : 'MMMM yyyy';

  return (
    <div className={styles.root} style={{ ...style, lineHeight: `${rowHeight}px` }}>
      <div className={styles.rows}>
        {renderRows}
        {showOverlay &&
          <label
            className={classNames(styles.label, {
              [styles.partialFirstRow]: rows[0].length !== 7,
            })}
            style={{ backgroundColor: theme.overlayColor }}
          >
            <span>{format(monthDate, dateFormat, { locale: locale.locale })}</span>
          </label>
        }
      </div>
    </div>
  );
};

export default Month;
