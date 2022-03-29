<script lang="ts">
	import DeleteButton from '$lib/DeleteButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import InputField from '../InputField.svelte';

	export let name: string;

	const dispatch = createEventDispatcher();
	const handleDelete = () => dispatch('delete');
</script>

<div>
	<DeleteButton on:click={handleDelete} />
	<InputField
		bind:value={name}
		extension="svelte"
		placeholder="Give the route a name"
		label="Page name"
		hideLabel
	/>
</div>

<style>
	div {
		background-color: var(--pink-1);
		border: 1px solid var(--pink-3);
		padding: 0.5rem 1rem;
		position: relative;
	}
</style>
