import React from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteCalendar from '../../src';
import '../../styles.css';
import './demo.css';

const container = document.querySelector('#demo');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <InfiniteCalendar
      width={Math.min(window.innerWidth, 400)}
    />
  </React.StrictMode>
);
