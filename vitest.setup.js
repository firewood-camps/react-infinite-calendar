import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

global.jest = vi;
global.window = globalThis;
global.setTimeout = globalThis.setTimeout;
global.clearTimeout = globalThis.clearTimeout;
global.performance = globalThis.performance;
global.console = globalThis.console;
global.requestAnimationFrame = callback => setTimeout(callback, 0);

globalThis.describe = vi.describe;
globalThis.it = vi.it;
globalThis.test = vi.test;
globalThis.expect = expect;
globalThis.__VITEST__ = true;

afterEach(() => {
  cleanup();
});
