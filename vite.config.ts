import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // <-- 1. Impor modul 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { // <-- 2. Tambahkan block 'resolve'
    alias: {
      '@': path.resolve(__dirname, './src'), // <-- 3. Ini mendefinisikan '@'
    }
  }
})