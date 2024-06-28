import React, { Component } from 'react';
import Calendar from './Calendar';
import { withDateSelection } from './Calendar/withDateSelection';

export { default as Calendar } from './Calendar';
export { withDateSelection } from './Calendar/withDateSelection';
export { withKeyboardSupport } from './Calendar/withKeyboardSupport';
export { withMultipleDates, defaultMultipleDateInterpolation } from './Calendar/withMultipleDates';
export { withRange, EVENT_TYPE } from './Calendar/withRange';

/*
 * By default, Calendar is a controlled component.
 * Export a sensible default for minimal setup
 */
class DefaultCalendar extends Component {
  static defaultProps = {
    Component: withDateSelection(Calendar),
    interpolateSelection: (selected) => selected,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: typeof props.selected !== 'undefined' ? props.selected : new Date(),
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selected !== prevState.selected) {
      return { selected: nextProps.selected };
    }
    return null;
  }

  handleSelect = (selected) => {
    const { onSelect, interpolateSelection } = this.props;

    if (typeof onSelect === 'function') {
      onSelect(selected);
    }

    this.setState({
      selected: interpolateSelection(selected, this.state.selected),
    });
  };

  render() {
    const { Component, interpolateSelection, ...props } = this.props;

    return (
      <Component
        {...props}
        onSelect={this.handleSelect}
        selected={this.state.selected}
      />
    );
  }
}

export default DefaultCalendar;
