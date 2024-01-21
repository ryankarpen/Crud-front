import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupNodeResolve from 'rollup-plugin-node-resolve'
import rolllupJson from 'rollup-plugin-json'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rollupNodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
    rolllupJson(),
  ],
})
