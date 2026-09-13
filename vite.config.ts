import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

type MdxRoot = {
    children: Array<{ type: string }>;
};

function stripFrontmatter() {
    return (tree: MdxRoot) => {
        tree.children = tree.children.filter((node) => node.type !== "yaml");
    };
}

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: [
        mdx({ remarkPlugins: [remarkGfm, remarkFrontmatter, stripFrontmatter] }),
        devtools(),
        tailwindcss(),
        tanstackStart(),
        nitro(),
        viteReact(),
    ],
});

export default config;
