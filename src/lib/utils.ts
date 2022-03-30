export function splitChildren(arr: Array<App.Element>): {
	endpoints: Array<App.Endpoint>;
	folders: Array<App.Folder>;
	pages: Array<App.Page>;
} {
	const endpoints = arr.filter<App.Endpoint>((i): i is App.Endpoint => i.type == 'endpoint');
	const folders = arr.filter<App.Folder>((i): i is App.Folder => i.type == 'folder');
	const pages = arr.filter<App.Page>((i): i is App.Page => i.type == 'page');

	return {
		endpoints,
		folders,
		pages
	};
}
