<script lang="ts">
	import buildZip from '$lib/builders/buildZip';

	import Folder from '$lib/elements/Folder.svelte';
	import project from '$lib/project';

	async function handleSubmit() {
		const blob = await buildZip($project);
		const a = document.createElement('a');
		a.href = window.URL.createObjectURL(blob);
		a.download = $project.name + '.zip';
		a.click();
	}
</script>

<h1>Svelte Scaffold Stuff</h1>

<div>
	Super basic tool that allows you to quickly lay out the structure of a SvelteKit app. Just add
	files, folders, endpoints and toggle some settings! Hitting <em>Download</em> will provide you
	with a zip file containing the folder structure for your <em>src</em> folder.
</div>

<form on:submit|preventDefault={handleSubmit}>
	<label>
		<h2>Project name</h2>
		<input type="text" bind:value={$project.name} placeholder="Give your project a name" required />
	</label>

	<div>Some extra options</div>
	<div class="extra">
		<label>
			<input type="checkbox" bind:value={$project.css} class="toggle" />
			<span>CSS</span>
		</label>

		<label>
			<input type="checkbox" bind:value={$project.hooks} class="toggle" />
			<span>Hooks</span>
		</label>

		<label>
			<input type="checkbox" bind:value={$project.routes.error} class="toggle" />
			<span>Error</span>
		</label>

		<label>
			<input type="checkbox" bind:value={$project.routes.layout} class="toggle" />
			<span>Layout</span>
		</label>

		<label>
			<input type="checkbox" bind:value={$project.typescript} class="toggle" />
			<span>TypeScript</span>
		</label>
	</div>
	<div>
		Add files, folders and endpoints to generate. Endpoints that contain <em>[...]</em> will be generated
		with extra code extracting the parameters. Both for parameters on the endpoint as well as any folders
		it is in.
	</div>

	<Folder
		bind:children={$project.routes.children}
		bind:error={$project.routes.error}
		bind:layout={$project.routes.layout}
		name=""
		isRoot
	/>

	<hr />

	<button type="Submit">Download</button>
</form>

<style>
	form {
		background-color: white;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
	}
	label {
		width: max-content;
	}

	label:last-child {
		margin-inline-start: auto;
	}
	button {
		align-self: flex-end;
		background-color: var(--teal-3);
		border: 2px solid var(--teal-3);
		border-radius: 4px;
		padding: 0.5rem 1rem;
		width: max-content;
	}

	button:is(:active, :focus, :hover) {
		background-color: var(--teal-1);
	}

	div:not(.extra) {
		background-color: var(--pink-2);
		border: 2px solid var(--pink-3);
		border-radius: 4px;
		color: white;
		padding: 0.5rem 1rem;
	}
	.extra {
		display: flex;
		gap: 0.5ch;
	}
</style>
