import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { visualizer } from 'rollup-plugin-visualizer';



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    // visualizer() 
  ],
  base: '/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          i18n: ['react-i18next'],
         }
      }
    }
  }
})
