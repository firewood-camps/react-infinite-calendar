import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    mockReset: true,
    restoreMocks: true,
    alias: {
      '@testing-library/react-hooks': '@testing-library/react',
    },
  },
  define: {
    'window': 'globalThis',
    'setTimeout': 'globalThis.setTimeout',
    'clearTimeout': 'globalThis.clearTimeout',
    'performance': 'globalThis.performance',
    'console': 'globalThis.console',
  }
});
