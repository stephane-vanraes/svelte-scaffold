<script lang="ts">
	import DeleteButton from '$lib/DeleteButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import Checkbox from '../Checkbox.svelte';
	import InputField from '../InputField.svelte';

	export let name = '';
	export let methods: App.EndpointMethods = {};

	$: console.log(methods);

	const dispatch = createEventDispatcher();
	const handleDelete = () => dispatch('delete');
</script>

<div>
	<DeleteButton on:click={handleDelete} />
	<InputField
		bind:value={name}
		extension="js"
		label="Endpoint name"
		placeholder="Give the endpoint a name"
		hideLabel
	/>
	<div>
		<span>Methods:</span>
		<Checkbox bind:value={methods.get} label="GET" />
		<Checkbox bind:value={methods.patch} label="PATCH" />
		<Checkbox bind:value={methods.post} label="POST" />
		<Checkbox bind:value={methods.put} label="PUT" />
		<Checkbox bind:value={methods.del} label="DEL" />
	</div>
</div>
