import React from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteCalendar, {
  Calendar,
  withRange,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const CalendarWithRange = withRange(Calendar);

const App = () => (
  <InfiniteCalendar
    Component={CalendarWithRange}
    selected={{
      start: new Date(2017, 1, 10),
      end: new Date(2017, 1, 18),
    }}
    locale={{
      headerFormat: 'MMM Do',
    }}
  />
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
