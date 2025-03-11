import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: [
        'buffer',
        'stream',
        'crypto',
      ],
      globals: {
        Buffer: true,
        process: true,
      }
    })
  ],
  define: {
    'process.env': {},
    'process.browser': true,
    global: 'window'
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    }
  }
})