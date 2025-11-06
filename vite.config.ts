import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Configuration pour le routage côté client
    strictPort: true,
    open: true,
    historyApiFallback: true,
  },
  // Configuration pour le routage côté client
  base: '/',
  plugins: [
    react(),
    componentTagger({
      framework: 'react',
      originalDir: 'src/components',
      outputDir: 'src/components',
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Configuration pour le routage côté client
  appType: 'spa',
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
