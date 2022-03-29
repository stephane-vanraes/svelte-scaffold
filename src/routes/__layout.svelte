<script>
	import '../app.css';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Icons from '$lib/Icons.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<Icons />
