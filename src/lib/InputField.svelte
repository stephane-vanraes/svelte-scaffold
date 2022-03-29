<script lang="ts">
	export let extension: string = '';
	export let hideLabel: boolean = false;
	export let label: string;
	export let placeholder: string;
	export let value: string;
</script>

<label>
	{#if !hideLabel}
		<span>{label}</span>
	{/if}
	<input type="text" bind:value {placeholder} aria-label={label} required />
	<span>.{extension}</span>
</label>

<style>
	label {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.5rem;
		width: calc(100% - 2rem);
	}

	span:first-child {
		flex: 0 0 100%;
		font-weight: 600;
	}

	input {
		background-color: transparent;
		border-color: transparent;
		border-width: 0 0 2px;
		flex: 1 0;
		padding: 0.25rem 0.5rem;
	}

	input:is(:active, :focus, :hover) {
		background-color: white;
		border-bottom-color: black;
		outline: none;
	}

	input:invalid {
		border-bottom-color: #555;
		border-bottom-style: dashed;
	}
	input::placeholder {
		color: #555;
	}
</style>
