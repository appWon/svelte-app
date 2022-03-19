import { ConfigEnv, defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

export default defineConfig(({ mode }: ConfigEnv) => {
  const server = {
    port: 3001,
    proxy: {
      "/ttv/api": {
        target: "http://app235.iptime.org:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  };

  return {
    plugins: [svelte()],
    resolve: {
      alias: {
        "@/lib": path.resolve(__dirname, "src/lib"),
        "@/pages": path.resolve(__dirname, "src/pages"),
      },
    },
    server,
  };
});
