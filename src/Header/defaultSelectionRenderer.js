import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import { parse, format } from 'date-fns';
import styles from './Header.scss';
import animation from './Animation.scss';

export default function defaultSelectionRenderer(value, {
  display,
  key,
  locale: { locale },
  dateFormat,
  onYearClick,
  scrollToDate,
  setDisplay,
  shouldAnimate,
}) {
  const date = parse(value);
  const values = date && [
    {
      active: display === 'years',
      handleClick: e => {
        onYearClick(date, e, key);
        setDisplay('years');
      },
      item: 'year',
      title: display === 'days' ? `Change year` : null,
      value: date.getFullYear(),
    },
    {
      active: display === 'days',
      handleClick: e => {
        if (display !== 'days') {
          setDisplay('days');
        } else if (date) {
          scrollToDate(date, -40, true);
        }
      },
      item: 'day',
      title: display === 'days'
        ? `Scroll to ${format(date, dateFormat, { locale })}`
        : null,
      value: format(date, dateFormat, { locale }),
    },
  ];

  return (
    <div
      key={key}
      className={styles.wrapper}
      aria-label={format(date, `${dateFormat} yyyy`, { locale })}
    >
      {values.map(({ handleClick, item, value, active, title }) => (
        <div
          key={item}
          className={classNames(styles.dateWrapper, styles[item], {
            [styles.active]: active,
          })}
          title={title}
        >
          <TransitionGroup component={null}>
            <CSSTransition
              key={`${item}-${value}`}
              classNames={animation}
              timeout={250}
              appear={shouldAnimate}
              enter={shouldAnimate}
              exit={shouldAnimate}
            >
              <span
                className={styles.date}
                aria-hidden={true}
                onClick={handleClick}
              >
                {value}
              </span>
            </CSSTransition>
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
}