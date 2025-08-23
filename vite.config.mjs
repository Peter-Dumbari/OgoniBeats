import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        blog: resolve(__dirname, "blog.html"),
        contact: resolve(__dirname, "contact.html"),
        detail: resolve(__dirname, "detail.html"),
        gallery: resolve(__dirname, "gallery.html"),
        event: resolve(__dirname, "event.html"),
        event_detail: resolve(__dirname, "event_detail.html"),
      },
    },
  },
});
