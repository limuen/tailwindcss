import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  return defineConfig({
    base:'./',
    plugins: [
      reactRefresh(),
      tsconfigPaths(),
      react(),
      legacy({ targets: ['defaults', 'not IE 11'] }),
    ],
  });
};
