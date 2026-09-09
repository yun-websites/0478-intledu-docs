import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: [mdx(), devtools(), tailwindcss(), tanstackStart(), nitro(), viteReact()],
});

export default config;
