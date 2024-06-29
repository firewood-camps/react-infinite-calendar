import React from 'react';
import PropTypes from 'prop-types';
import { emptyFn } from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import classNames from 'classnames';
import styles from './Header.scss';

const Header = ({
  dateFormat,
  display,
  layout,
  locale,
  onYearClick = emptyFn,
  selected,
  shouldAnimate,
  theme,
  renderSelection = defaultSelectionRenderer,
}) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.landscape]: layout === 'landscape',
      })}
      style={{
        backgroundColor: theme.headerColor,
        color: theme.textColor.active,
      }}
    >
      {
        selected ? renderSelection(selected, {
          dateFormat,
          display,
          key: 'selection',
          locale,
          onYearClick,
          scrollToDate: emptyFn,
          setDisplay: emptyFn,
          shouldAnimate,
        }) : (
          <div className={classNames(styles.wrapper, styles.blank)}>
            {locale.blank}
          </div>
        )
      }
    </div>
  );
};

Header.defaultProps = {
  onYearClick: emptyFn,
  renderSelection: defaultSelectionRenderer,
};

Header.propTypes = {
  dateFormat: PropTypes.string,
  display: PropTypes.string,
  layout: PropTypes.string,
  locale: PropTypes.object,
  onYearClick: PropTypes.func,
  selected: PropTypes.any,
  shouldAnimate: PropTypes.bool,
  theme: PropTypes.object,
};

export default Header;
