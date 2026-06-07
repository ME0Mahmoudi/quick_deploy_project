import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quick_deploy_project/',
  plugins: [react()],
})