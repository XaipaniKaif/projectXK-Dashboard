import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'node:dns'
// https://vite.dev/config/
dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  plugins: [react()],
})
