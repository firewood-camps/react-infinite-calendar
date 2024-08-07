import React from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteCalendar, {
  Calendar,
  withDateSelection,
  withKeyboardSupport,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const App = () => (
  <InfiniteCalendar
    /*
     * Here, we're enhancing our base Calendar component by wrapping it with the `withKeyboardSupport` HOC
     * and then giving it the basic date selection functionality by wrapping it with `withDateSelection`
     *
     * You could also use the `withKeyboardSupport` with the `withRange` and `withMultipleDates` HOCs
     */
    Component={withDateSelection(withKeyboardSupport(Calendar))}
  />
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
