<script lang="ts">
	import Checkbox from '$lib/Checkbox.svelte';
	import Folder from '$lib/elements/Folder.svelte';
	import InputField from '$lib/InputField.svelte';

	const data: App.Project = {
		routes: {
			children: [
				{
					name: 'index',
					type: 'page'
				}
			],
			name: '',
			type: 'folder'
		},
		hooks: false,
		name: ''
	};

	async function handleSubmit() {
		// Submit to API
		const file = await fetch('./api', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.blob());

		// Trigger download
		const a = document.createElement('a');
		a.href = window.URL.createObjectURL(file);
		a.download = data.name + '.zip';
		a.click();
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<InputField label="Project Name" placeholder="Give your project a name" bind:value={data.name} />
	<Checkbox label="Generate Hooks file" bind:value={data.hooks} />
	<Folder
		bind:children={data.routes.children}
		bind:error={data.routes.error}
		bind:layout={data.routes.layout}
		name=""
		isRoot
	/>

	<hr />

	<button type="Submit">Download</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
