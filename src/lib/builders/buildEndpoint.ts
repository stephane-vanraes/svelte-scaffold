import type JSZip from 'jszip';

import * as endpointContent from '$lib/content/endpoint';

function buildEndpoint(endpoint: App.Endpoint, zip: JSZip, folderparams: Array<string>, typescript : boolean) {
	let params: Array<string> = [...endpoint.name.matchAll(/\[[a-zA-Z]*\]/gm)].map((m) =>
		m[0].replace('[', '').replace(']', '')
	);

	params = [...folderparams, ...params];

	let content = '';

	if (params.length > 0) {
		if (endpoint.methods.get) content += endpointContent.GETParams;
		if (endpoint.methods.patch) content += endpointContent.PATCHParams;
		if (endpoint.methods.post) content += endpointContent.POSTParams;
		if (endpoint.methods.put) content += endpointContent.PUTParams;
		if (endpoint.methods.del) content += endpointContent.DELParams;
	} else {
		if (endpoint.methods.get) content += endpointContent.GET;
		if (endpoint.methods.patch) content += endpointContent.PATCH;
		if (endpoint.methods.post) content += endpointContent.POST;
		if (endpoint.methods.put) content += endpointContent.PUT;
		if (endpoint.methods.del) content += endpointContent.DEL;
	}

	content = content.replace(/REPLACE/gm, params.join(','));

	zip.file(endpoint.name + (typescript ? '.ts' : '.js'), content);
}

export default buildEndpoint;
