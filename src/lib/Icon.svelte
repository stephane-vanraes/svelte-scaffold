<script lang="ts">
	export let name: string;
</script>

<svg viewBox="0 0 24 24" {...$$restProps}>
	<use xlink:href="#svg-{name}" />
</svg>

<style>
	svg {
		height: 1em;
		width: 1em;
	}
</style>
