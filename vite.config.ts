import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5003,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'fix-vite-8-warnings',
      config(config) {
        const fix = (opt: any) => {
          if (opt?.rollupOptions) {
            opt.rolldownOptions = { ...opt.rollupOptions };
            delete opt.rolldownOptions.jsx;
            delete opt.rollupOptions.jsx;
          }
        };
        fix(config.optimizeDeps);
        fix(config.ssr?.optimizeDeps);
        return config;
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
