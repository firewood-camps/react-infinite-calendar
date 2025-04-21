import React from 'react';
import { withImmutableProps } from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import Slider from './Slider';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

const enhanceRenderSelection = ({ renderSelection, setDisplayDate }) => ({
  renderSelection: (values, { scrollToDate, displayDate, ...props }) => {
    if (!values.length) {
      return null;
    }

    const dates = values.sort();
    const index = values.indexOf(format(parse(displayDate), 'yyyy-MM-dd'));

    return (
      <Slider
        index={index !== -1 ? index : dates.length - 1}
        onChange={(index) =>
          setDisplayDate(dates[index], () =>
            setTimeout(() => scrollToDate(dates[index], 0, true), 50)
          )
        }
      >
        {dates.map((value, i) =>
          defaultSelectionRenderer(value, {
            ...props,
            key: i,
            scrollToDate,
            shouldAnimate: false,
          })
        )}
      </Slider>
    );
  },
});

const withEnhancedSelectionRenderer = (Component) => {
  return withImmutableProps(enhanceRenderSelection)(Component);
};

export default withEnhancedSelectionRenderer;
