<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { splitChildren } from '../utils';
	import Checkbox from '../Checkbox.svelte';
	import Endpoint from './Endpoint.svelte';
	import InputField from '../InputField.svelte';
	import Page from './Page.svelte';
	import DeleteButton from '$lib/DeleteButton.svelte';

	export let children: Array<App.Element> = [];
	export let error: boolean;
	export let layout: boolean;
	export let name: string;

	export let isRoot: boolean;

	$: ({ endpoints, folders, pages } = splitChildren(children));

	function addEndpoint() {
		const newEndpoint: App.Endpoint = {
			name: '',
			methods: {},
			type: 'endpoint'
		};
		children = [...children, newEndpoint];
	}
	function addFolder() {
		const newFolder: App.Folder = {
			children: [
				{
					name: 'index',
					type: 'page'
				}
			],
			name: '',
			type: 'folder'
		};
		children = [...children, newFolder];
	}
	function addPage() {
		const newPage: App.Page = {
			name: '',
			type: 'page'
		};
		children = [...children, newPage];
	}

	function deleteElement(element) {
		children = children.filter((child) => child != element);
	}

	const dispatch = createEventDispatcher();
	const handleDelete = () => dispatch('delete');
</script>

<div class="wrapper">
	{#if !isRoot}
		<DeleteButton on:click={handleDelete} />
		<InputField label="Folder Name" placeholder="Name your folder" bind:value={name} />
	{/if}

	<div class="extras">
		<span>Special routes: </span>
		<Checkbox bind:value={error} label="Error page" />
		<Checkbox bind:value={layout} label="Layout" />
	</div>

	{#each folders as folder}
		<svelte:self
			bind:children={folder.children}
			bind:error={folder.error}
			bind:layout={folder.layout}
			bind:name={folder.name}
			on:delete={() => deleteElement(folder)}
		/>
	{/each}

	{#each pages as page}
		<Page bind:name={page.name} on:delete={() => deleteElement(page)} />
	{/each}

	{#each endpoints as endpoint}
		<Endpoint
			bind:name={endpoint.name}
			bind:methods={endpoint.methods}
			on:delete={() => deleteElement(endpoint)}
		/>
	{/each}

	{#if children.length == 0}
		<div class="empty">
			<span>This folder has no content. </span>
		</div>
	{/if}

	<div class="elements">
		<span>Add elements</span>
		<button on:click|preventDefault={addEndpoint}>Add Endpoint</button>
		<button on:click|preventDefault={addFolder}>Add Folder</button>
		<button on:click|preventDefault={addPage}>Add Page</button>
	</div>
</div>

<style>
	.wrapper {
		background-color: var(--teal-1);
		border: 1px solid var(--teal-3);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		position: relative;
	}

	.wrapper > div:not(.wrapper) {
		align-items: center;
		border: none;
		flex-direction: row;
		padding: 0;
	}

	.empty {
		background-color: var(--gray-3);
		display: grid;
		min-height: 3rem;
		place-items: center;
	}

	button {
		background-color: black;
		border: 2px solid black;
		border-radius: 4px;
		color: white;
		padding: 0.25rem 0.5rem;
		transition: all 200ms ease-in;
	}
	button:is(:active, :focus, :hover) {
		background-color: var(--teal-1);
		color: black;
	}
</style>
