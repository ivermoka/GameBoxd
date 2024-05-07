<script lang="ts">
	import Register from '$lib/components/auth/Register.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="flex h-full items-center justify-center">
	<Register error={form?.error} />
</main>