import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	build: {
		target: "esnext",
		minify: "esbuild",
	},
	server: {
		proxy: {
			/*"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},*/
		},
	},
})
