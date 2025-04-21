import React from 'react';
import { render } from '@testing-library/react';
import Calendar from '../Calendar/index.jsx';

describe('Calendar Component', () => {
  it('renders without crashing', () => {
    render(<Calendar />);
  });
});
