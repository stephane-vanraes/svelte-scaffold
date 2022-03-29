/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface EndpointMethods {
		get?: boolean,
		patch?: boolean,
		post?: boolean,
		put?: boolean,
		del?: boolean
	}

	interface Element {
		name: string,
		type: string
	}

	interface Page extends Element {
		type: 'page'
	}

	interface Endpoint extends Element {
		methods: EndpointMethods,
		type: 'endpoint'
	}

	interface Folder extends Element {
		children: Array<Element>,
		type: 'folder',
		layout?: boolean,
		error?: boolean
	}

	interface Project {
		name: string,
		routes: Folder,
		hooks?: boolean
	}
}
