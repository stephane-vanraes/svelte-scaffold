<script lang="ts">
	export let label: string;
	export let value: boolean;
</script>

<label>
	<input type="checkbox" bind:checked={value} />
	<span>{label}</span>
</label>

<style>
	input {
		position: fixed;
		top: -100vh;
	}
	input:checked + span {
		background-color: white;
	}

	span {
		border-radius: 2px;
		padding: 0.25rem 0.5rem;
	}
</style>
