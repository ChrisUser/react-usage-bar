import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [react(), dts({ include: ['lib'] })],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'react-usage-bar',
            // the proper extensions will be added
            fileName: 'main'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    }
}
