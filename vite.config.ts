import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            fix: true,
            include: ['src/**/*.ts', 'src/**/*.tsx'],
        })
    ],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./src/app"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@shared": path.resolve(__dirname, "./src/shared"),
        }
    }
})
