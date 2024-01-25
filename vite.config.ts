import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd(), "VITE_")}
    return {
        plugins: [
            react(),
            tsconfigPaths(),
        ].filter(Boolean),
        resolve: {
            alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
        },
    }
})
