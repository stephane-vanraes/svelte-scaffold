<script>
	import Icon from './Icon.svelte';
</script>

<button on:click|preventDefault aria-label="Delete">
	<Icon name="cross" />
</button>

<style>
	button {
		aspect-ratio: 1 / 1;
		background-color: transparent;
		border: none;
		border-radius: 50%;
		display: grid;
		font-size: 0.5rem;
		height: 1rem;
		inset: 0.25rem 0.25rem auto auto;
		place-items: center;
		position: absolute;
	}

	button:is(:active, :focus, :hover) {
		background-color: white;
	}
</style>
