<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="flex h-full items-center justify-center">
	<Login error={form?.error} />
</main>