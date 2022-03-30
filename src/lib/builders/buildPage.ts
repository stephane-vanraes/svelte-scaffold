import pageContent from '$lib/content/page';
import { typescriptify } from '$lib/utils';
import type JSZip from 'jszip';

function buildPage(page: App.Page, zip: JSZip, typescript : boolean) {
	zip.file(page.name + '.svelte', typescript ? typescriptify(pageContent) : pageContent);
}

export default buildPage;
