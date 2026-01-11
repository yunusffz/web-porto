import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.{test,spec}.{js,ts,tsx}'], // Vitest uses .test/.spec
    exclude: ['**/e2e/**', '**/*.e2e.*', 'node_modules/*'], // Exclude Playwright files
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
