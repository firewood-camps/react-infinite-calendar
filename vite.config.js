import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        presets: [
          ['@babel/preset-react', { runtime: 'classic' }],
          '@babel/preset-env'
        ]
      }
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ReactInfiniteCalendar',
      fileName: (format) => `react-infinite-calendar.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName: 'Cal__[name]__[local]',
    },
  },
}); 