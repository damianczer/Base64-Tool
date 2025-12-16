import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    compression({
      include: [/\.(js|mjs|json|css|html)$/],
      deleteOriginalAssets: false,
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
    cssMinify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
})
