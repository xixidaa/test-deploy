import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src')
      },
      {
        find: 'comps',
        replacement: resolve('src/components')
      },
      {
        find: 'utils',
        replacement: resolve('src/utils')
      },
      {
        find: 'api',
        replacement: resolve('src/apis')
      },
      {
        find: 'assets',
        replacement: resolve('src/assets')
      }
    ]
  },
  plugins: [vue({
    script: {
      refSugar: true
    }
  })],
  server: {
    host: '0.0.0.0',
    port: 4000,
    cors: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: 'terser', // 默认esbuild
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1500
  }
})
