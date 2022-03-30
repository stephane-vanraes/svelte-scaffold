<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { splitChildren } from '../utils';
	import project from '$lib/project';
	import Icon from '$lib/Icon.svelte';

	export let children: Array<App.Element> = [];
	export let error: boolean;
	export let layout: boolean;
	export let name: string;

	export let isRoot: boolean;

	let show = true;

	$: ({ endpoints, folders, pages } = splitChildren(children));

	const addEndpoint = () => (children = project.addEndpoint(children));
	const addFolder = () => (children = project.addFolder(children));
	const addPage = () => (children = project.addPage(children));
	const deleteElement = (element) => (children = project.deleteElement(children, element));

	const dispatch = createEventDispatcher();
	const handleDelete = () => dispatch('delete');
</script>

{#if !isRoot}
	<div class="element">
		<label>
			<input type="checkbox" bind:checked={show} aria-label="Collapse folder" class="collapse" />
			<Icon name="chevron" />
		</label>
		<button class="delete" aria-label="Delete" type="button" on:click={handleDelete}>
			<Icon name="cross" />
		</button>
		<input
			type="text"
			bind:value={name}
			aria-label="Folder name"
			placeholder="Folder name"
			required
		/>
		<label>
			<input class="toggle" type="checkbox" bind:checked={error} />
			<span>Error page</span>
		</label>
		<label>
			<input class="toggle" type="checkbox" bind:checked={layout} />
			<span>Layout page</span>
		</label>
	</div>
{/if}

{#if show}
	<div class:wrapper={!isRoot}>
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
			<div class="element">
				<button
					class="delete"
					aria-label="Delete"
					type="button"
					on:click={() => deleteElement(page)}
				>
					<Icon name="cross" />
				</button>
				<input
					type="text"
					bind:value={page.name}
					aria-label="Route name"
					placeholder="Route name"
					required
				/>
			</div>
		{/each}

		{#each endpoints as endpoint}
			<div class="element">
				<button
					class="delete"
					aria-label="Delete"
					type="button"
					on:click={() => deleteElement(endpoint)}
				>
					<Icon name="cross" />
				</button>
				<input
					type="text"
					bind:value={endpoint.name}
					aria-label="Endpoint name"
					placeholder="Endpoint name"
					required
				/>
				<label>
					<input class="toggle" type="checkbox" bind:checked={endpoint.methods.get} />
					<span>GET</span>
				</label>
				<label>
					<input class="toggle" type="checkbox" bind:checked={endpoint.methods.patch} />
					<span>PATCH</span>
				</label>
				<label>
					<input class="toggle" type="checkbox" bind:checked={endpoint.methods.post} />
					<span>POST</span>
				</label>
				<label>
					<input class="toggle" type="checkbox" bind:checked={endpoint.methods.put} />
					<span>PUT</span>
				</label>
				<label>
					<input class="toggle" type="checkbox" bind:checked={endpoint.methods.del} />
					<span>DEL</span>
				</label>
			</div>
		{/each}

		{#if children.length == 0}
			<div class="empty">
				<span>This folder has no content. </span>
			</div>
		{/if}
		<button class="adder" on:click|preventDefault={addEndpoint}>Add Endpoint</button>
		<button class="adder" on:click|preventDefault={addFolder}>Add Folder</button>
		<button class="adder" on:click|preventDefault={addPage}>Add Page</button>
	</div>
{/if}

<style>
	.wrapper {
		padding-inline-start: 2rem;
	}
	.element {
		align-items: center;
		display: flex;
		gap: 1ch;
	}
	.adder {
		background-color: transparent;
		border: 1px dashed var(--gray-2);
		display: block;
		font-size: 0.75rem;
		margin-block-start: 0.25rem;
		padding: 0.25rem 0.5rem;
		width: 15ch;
	}
	.adder:is(:active, :focus, :hover) {
		background-color: var(--gray-2);
		color: white;
	}
</style>
