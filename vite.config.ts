import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    open: true,
  },
  base: '/',
  plugins: [
    react(),
    mode === "development" && componentTagger({
      framework: 'react',
      originalDir: 'src/components',
      outputDir: 'src/components',
    }),
  ].filter(Boolean),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuration spécifique pour le routage côté client
  appType: 'spa',
  // Configuration pour gérer les routes côté client
  server: {
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /^\/channels/, to: '/index.html' },
        { from: /^\/checkout/, to: '/index.html' },
        { from: /^\/thank-you/, to: '/index.html' },
        { from: /^\/privacy-policy/, to: '/index.html' },
        { from: /^\/terms-conditions/, to: '/index.html' },
        { from: /^\/disclaimer/, to: '/index.html' },
      ],
    },
  },
}));
