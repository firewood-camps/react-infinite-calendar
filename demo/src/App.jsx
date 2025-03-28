import React from 'react';
import InfiniteCalendar from '../../src/index';
import '../../src/styles.css';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Infinite Calendar Demo</h1>
      <InfiniteCalendar
        selected={new Date()}
        onSelect={date => console.log('Selected:', date)}
        minDate={new Date()}
        maxDate={new Date(2025, 11, 31)}
        width={400}
        height={600}
        theme={{
          accentColor: '#1E88E5',
          floatingNav: {
            background: '#1E88E5',
            chevron: '#FFF',
            color: '#FFF'
          },
          headerColor: '#1E88E5',
          selectionColor: '#1E88E5',
          textColor: {
            active: '#FFF',
            default: '#333'
          },
          todayColor: '#FF4C4C',
          weekdayColor: '#1E88E5'
        }}
      />
    </div>
  );
}

export default App; 