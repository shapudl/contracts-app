import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
		  // Exclude specific directories from being watched
		  exclude: ['node_modules', 'dist'],
		}
	  }
});
