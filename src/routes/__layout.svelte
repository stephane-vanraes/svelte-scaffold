<script>
	import '../app.css';
	import Icons from '$lib/Icons.svelte';
	import Icon from '$lib/Icon.svelte';
</script>

<main>
	<slot />
</main>

<footer>
	<span>&copy; 2022 Stéphane Vanraes </span>

	<a href="https://github.com/stephane-vanraes/svelte-scaffold" rel="external">
		<Icon name="github" />
		<span>Github</span>
	</a>
</footer>

<Icons />

<style>
	footer {
		align-items: center;
		background-color: var(--teal-3);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		padding: 0.5rem 1rem;
	}

	a {
		align-items: center;
		border: 2px solid transparent;
		border-radius: 4px;
		display: flex;
		gap: 0.5ch;
		margin-inline-start: auto;
		padding: 0.25rem 0.5rem;
	}
	a:is(:active, :focus, :hover) {
		border-color: var(--pink-3);
		background-color: white;
	}
</style>
