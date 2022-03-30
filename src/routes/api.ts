import JSZip from 'jszip';
import hooksContent from '$lib/content/hooks';

import buildFolder from '$lib/builders/buildFolder';

export async function post({ request }) {
	try {
		const data: App.Project = await request.json();
		const zip = new JSZip();

		if (data.hooks) {
			zip.file('hooks.js', hooksContent);
		}

		buildFolder(data.routes, zip, []);

		const file = await zip.generateAsync({
			type: 'nodebuffer',
			compression: 'STORE'
		});

		return {
			status: 200,
			body: file,
			headers: {
				'Content-Type': 'application/zip'
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: err
		};
	}
}
