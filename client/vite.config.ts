import { defineConfig, loadEnv } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "../.", '')
  return {
    server: {
      port: parseInt(env.FRONTEND_PORT) || 5173,
    },
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
    envDir: path.resolve(__dirname, ".."), // Vite will see .env in repo root
    envPrefix: ["VITE_", "BACKEND_"] // Set which prefixes to expose for environment variables
  }
})