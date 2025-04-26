import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  base: "./", 
  plugins: [
    react(),
    nodePolyfills({
      include: [
        'buffer', 
        'stream', 
        'crypto', 
        'events', 
        'path', 
        'process', 
        'util',
        'assert',
        'fs',
        'os'
      ],
      globals: { 
        Buffer: true, 
        global: true,
        process: true 
      },
      protocolImports: true,
    }),
  ],
  define: {
    'process.env': {},
    'process.browser': true,
    global: 'globalThis',
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert/',
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify/browser',
      url: 'url/',
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js", 
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          vendor: [
            'react', 
            'react-dom',
            'react-icons'
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@uniswap/widgets'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});