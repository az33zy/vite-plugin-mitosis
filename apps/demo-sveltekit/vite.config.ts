import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import mitosis from 'vite-plugin-mitosis';

export default defineConfig({
  plugins: [mitosis(), sveltekit(), inspect()],
});
