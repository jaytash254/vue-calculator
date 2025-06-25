import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace 'your-repo-name' with your actual GitHub repo name (e.g., vue-calculator)
export default defineConfig({
  base: '/vue-calculator/',
  plugins: [vue()],
})
