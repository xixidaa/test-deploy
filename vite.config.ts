import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
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
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    cors: true,
    open: true,
  }
})
