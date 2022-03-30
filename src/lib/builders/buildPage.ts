import pageContent from '$lib/content/page';
import type JSZip from 'jszip';

function buildPage(page: App.Page, zip: JSZip) {
	zip.file(page.name + '.svelte', pageContent);
}

export default buildPage;
