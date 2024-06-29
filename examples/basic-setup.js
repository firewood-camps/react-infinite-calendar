import React from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

// All props are optional, so this is the minimum setup you need
const App = () => <InfiniteCalendar />;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
