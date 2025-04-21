<div align="center">
<img src="https://raw.githubusercontent.com/clauderic/react-infinite-calendar/master/.github/logo.png" width="180"/>
</div>

# React Infinite Calendar (React 18 Upgrade)

Overview

This project is a fork of the original React Infinite Calendar, upgraded to support React 18, including functional components, hooks, improved performance, and updated dependencies.

Features

Supports React 18 – Leveraging latest React features and performance improvements

Functional Components and Hooks – Cleaner and more maintainable code

Flexible Date Handling – Min/max date constraints, disabled dates, and disabled days

Extensible – Supports date range-selection, multiple date selection, or custom higher-order components

Localization and Internationalization – Easily adapt the calendar to different languages and locales

Customizable Themes – Extensive theming capabilities to match your application's design

Year Selection – Quickly navigate through years

Keyboard Accessibility – Fully accessible via keyboard navigation

Comprehensive Event System – Callbacks for selections, scrolling events, and more

Mobile-Friendly – Optimized for smooth performance on mobile devices

Installation

To install dependencies, run:

npm install
# or using yarn
yarn install

Usage

To use the Infinite Calendar component:

import React from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <InfiniteCalendar width={Math.min(window.innerWidth, 400)} />
  </React.StrictMode>
);

Testing Locally

Start the local development server:

npm run start
# or using yarn
yarn start

The demo will be available at http://localhost:3000.

Running Tests

Execute the test suite with:

npm run test
# or using yarn
yarn test

API Changes

Hooks-Based API

Transitioned entirely to React Hooks (useState, useEffect, useRef, useCallback).

Minimal API changes; ensure compatibility with React 18 in parent projects.

ESLint Improvements

Integrated react-hooks ESLint plugin for best practices enforcement.

Updated Dependencies

React and ReactDOM upgraded to ^18.3.1

date-fns upgraded to ^4.1.0

react-transition-group upgraded to ^4.4.5

Contributing

We welcome contributions! Submit clearly documented pull requests or bug reports.

License

MIT License

