import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/withdrawal-coping/", // Buraya kendi repo adını ekledik
});
