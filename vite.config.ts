import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// `base: './'` makes all asset URLs relative, so the build works whether it's
// served from a user/org page (username.github.io) or a project subpath
// (username.github.io/repo/). Combined with HashRouter, deep links never 404.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
