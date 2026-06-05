import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/room_stay_desktop/' : '/',
  server: {
    host: '0.0.0.0',
    port: 4174,
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
  },
}));
