import JSZip from 'jszip';
import hooksContent from '$lib/content/hooks';
import buildFolder from '$lib/builders/buildFolder';

export default async function (project: App.Project): Promise<Blob> {
	const zip = new JSZip();

	if (project.hooks) {
		zip.file('hooks.js', hooksContent);
	}

	buildFolder(project.routes, zip, []);

	const file = await zip.generateAsync({
		type: 'blob',
		compression: 'DEFLATE',
		compressionOptions: {
			level: 9
		}
	});

	return file;
}
