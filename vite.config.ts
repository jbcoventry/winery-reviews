import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://wineries.jbcov.com",
        changeOrigin: true,

        configure: (proxy) => {
          proxy.on("error", (err) => {
            console.log("error", err);
          });

          //@ts-expect-error: don't need proxyReq
          proxy.on("proxyReq", (proxyReq, req) => {
            console.log("Request sent to target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req) => {
            console.log(
              "Response received from target:",
              proxyRes.statusCode,
              req.url,
            );
          });
        },
      },
    },
  },
});
