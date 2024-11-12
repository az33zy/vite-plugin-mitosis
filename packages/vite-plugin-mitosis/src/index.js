import { componentToSvelte, parseJsx } from '@builder.io/mitosis';
import { createFilter } from 'vite';

/**
 * @param {string} id
 * @param {string} text
 */
function jsxToSvelte(id, text) {
  const isTsx = id.endsWith('.tsx');
  const component = parseJsx(text, { typescript: isTsx });
  const svelteComponent = componentToSvelte()({ component });
  return svelteComponent;
}

/**
 * @param {Object} [options]
 * @param {import('vite').FilterPattern} [options.include]
 * @param {import('vite').FilterPattern} [options.exclude]
 * @returns {import('vite').Plugin}
 */
export default function vitePluginMitosis({
  include = /\.[jt]sx$/,
  exclude,
} = {}) {
  const filter = createFilter(include, exclude);

  return {
    name: 'vite-plugin-mitosis',
    enforce: 'pre',
    config(config) {
      return {
        // only apply esbuild to ts files
        // since we are handling jsx and tsx now
        esbuild: {
          include: /\.ts$/,
        },
      };
    },
    transform(code, id) {
      if (!filter(id)) return;

      return jsxToSvelte(id, code);
    },
    handleHotUpdate(ctx) {
      if (!filter(ctx.file)) return;

      const defaultRead = ctx.read;

      ctx.read = async function () {
        return jsxToSvelte(ctx.file, await defaultRead());
      };
    },
  };
}
