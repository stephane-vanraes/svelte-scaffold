import JSZip from 'jszip';
import hooksContent from '$lib/content/hooks';
import cssContent from '$lib/content/appcss';
import { withCss } from '$lib/content/layout';
import buildFolder from '$lib/builders/buildFolder';
import { typescriptify } from '$lib/utils';

export default async function (project: App.Project): Promise<Blob> {
	const zip = new JSZip();

	if (project.hooks) {
		zip.file('hooks' + (project.typescript ? '.ts' : '.js'), hooksContent);
	}
	const routeFolder = zip.folder('routes')
	buildFolder(project.routes, routeFolder, [], project.typescript);

	if (project.css) {
		zip.file('app.css', cssContent)
		routeFolder.file('__layout.svelte', project.typescript ? typescriptify(withCss) : withCss);
	}

	const file = await zip.generateAsync({
		type: 'blob',
		compression: 'DEFLATE',
		compressionOptions: {
			level: 9
		}
	});

	return file;
}
