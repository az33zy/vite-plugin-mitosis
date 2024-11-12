# vite-plugin-mitosis

Vite plugin to import JSX components to different UI frameworks using [mitosis](https://mitosis.builder.io/docs/overview/).

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
