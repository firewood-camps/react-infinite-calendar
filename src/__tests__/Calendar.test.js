import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from '../Calendar';

describe('Calendar Component', () => {
  it('renders without crashing', () => {
    render(<Calendar />);
    expect(screen.getByLabelText('Calendar')).toBeInTheDocument();
  });

  it('displays correct header', () => {
    const { container } = render(<Calendar />);
    const header = container.querySelector('.Header');
    expect(header).toBeInTheDocument();
  });

  it('displays weekdays when showWeekdays is true', () => {
    const { container } = render(
      <Calendar displayOptions={{ showWeekdays: true }} />
    );
    const weekdays = container.querySelector('.Weekdays');
    expect(weekdays).toBeInTheDocument();
  });

  it('does not display weekdays when showWeekdays is false', () => {
    const { container } = render(
      <Calendar displayOptions={{ showWeekdays: false }} />
    );
    const weekdays = container.querySelector('.Weekdays');
    expect(weekdays).not.toBeInTheDocument();
  });

  it('changes display mode when setDisplay is called', () => {
    const { container } = render(<Calendar />);
    
    expect(container.querySelector('.Years')).not.toBeInTheDocument();
    
    const header = container.querySelector('.Header');
    fireEvent.click(header);
    
    expect(container.querySelector('.Years')).toBeInTheDocument();
  });

  it('scrolls to date when scrollToDate is called', () => {
    const onScrollSpy = jest.fn();
    const { container } = render(<Calendar onScroll={onScrollSpy} />);
    
    const monthList = container.querySelector('.MonthList');
    expect(monthList).toBeInTheDocument();
    
    fireEvent.scroll(monthList, { target: { scrollTop: 100 } });
    
    expect(onScrollSpy).toHaveBeenCalled();
  });
});
