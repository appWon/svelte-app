import { ConfigEnv, defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import 'dotenv/config';

export default defineConfig(({ mode }: ConfigEnv) => {
    const port = mode === 'development' && 3001;

    const server = {
        port,
        proxy: {
            '/ttv/api': {
                target: process.env.BACK_END_URL,
                changeOrigin: true,
                secure: false,
            },
        },
    };

    return {
        plugins: [svelte()],
        resolve: {
            alias: {
                '@/lib': path.resolve(__dirname, 'src/lib'),
                '@/pages': path.resolve(__dirname, 'src/pages'),
            },
        },
        server,
    };
});
