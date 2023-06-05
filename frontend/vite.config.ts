import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
  define: {
    "global": {},
  },
  plugins: [react()],
  build: {
    commonjsOptions: { include: [] },
  },
  optimizeDeps: {
    disabled: false,
  },
});