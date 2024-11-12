# vite-plugin-mitosis

[![npm](https://img.shields.io/npm/v/vite-plugin-mitosis.svg)](https://www.npmjs.com/package/vite-plugin-mitosis)

Vite plugin to import JSX components to different UI frameworks using [mitosis](https://mitosis.builder.io/docs/overview/).

> [!WARNING]
> Currently, this is a Proof-of-Concept. It only works with Mitosis JSX to Svelte for now.

## Installation

```sh
# npm
npm install --save-dev vite-plugin-mitosis

# yarn
yarn add -D vite-plugin-mitosis

# pnpm
pnpm add -D vite-plugin-mitosis

# bun
bun add -D vite-plugin-mitosis
```

## Usage

### SvelteKit

```js
// vite.config.js
import { defineConfig } from 'vite';
import { svelteKit } from '@sveltejs/kit/vite';
import mitosis from 'vite-plugin-mitosis';

export default defineConfig({
  // ...
  plugins: [mitosis(), sveltekit()],
  //        ^ should go before sveltekit
});
```

```js
// svelte.config.js
const config = {
  extensions: ['.svelte', '.jsx', '.tsx'],
};
```

Then JSX components can be imported as is:

```js
import Button from '$lib/components/Button.jsx';
```

## License

[MIT](./LICENSE)
