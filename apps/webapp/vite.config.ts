import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    strictPort: true,
    port: 5010,
  },
  plugins: [
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
