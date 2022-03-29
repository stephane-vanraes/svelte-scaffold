<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<h1>Svelte Scaffolder</h1>
	<nav>
		<a href="/" aria-current={$page.url.pathname == '/'}>Home</a>
		<a href="/build" aria-current={$page.url.pathname == '/build'}>Build</a>
		<a href="/about" aria-current={$page.url.pathname == '/about'}>About</a>
	</nav>
</header>

<style>
	header {
		align-items: center;
		background-color: var(--teal-3);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		padding: 0.5rem 1rem;
	}
	h1 {
		font-size: 1.5rem;
		font-weight: 600;
	}
	nav {
		margin-inline-start: auto;
	}
	a {
		border: 2px solid transparent;
		border-radius: 4px;
		padding: 0.25rem 0.5rem;
	}
	a:is(:active, :focus, :hover) {
		border-color: var(--pink-3);
		background-color: white;
	}
	a[aria-current~='true'] {
		background-color: var(--teal-1);
	}
</style>
