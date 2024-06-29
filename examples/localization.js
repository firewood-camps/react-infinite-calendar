import React from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { fr } from 'date-fns/locale';

const locale = {
  blank: 'Aucune date sélectionnée',
  headerFormat: 'dddd, D MMM',
  locale: fr, // Pass in the date-fns locale for the language you want (in this case, French)
  todayLabel: {
    long: "Aujourd'hui",
    short: 'Auj.',
  },
  weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  weekStartsOn: 1, // Start the week on Monday
};

const App = () => <InfiniteCalendar locale={locale} />;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
