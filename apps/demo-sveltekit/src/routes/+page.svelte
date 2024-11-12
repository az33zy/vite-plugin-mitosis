<script lang="ts">
  // @ts-nocheck
  import ComponentSvelte from '../lib/components/ComponentSvelte.svelte';
  import ComponentJsx from '$lib/components/ComponentJsx.jsx';
  import ComponentTsx from '$lib/components/ComponentTsx.tsx';
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<ComponentSvelte />
<ComponentJsx name="Test">
  <ComponentTsx name="World" />
</ComponentJsx>
