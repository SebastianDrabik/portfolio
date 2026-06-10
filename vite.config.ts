import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {nitro} from "nitro/vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [devtools(), tailwindcss(), tanstackStart(), nitro({preset: 'node-server'}), viteReact()],
	preview: {
		host: '0.0.0.0',
		port: 4173
	}
});

export default config;
