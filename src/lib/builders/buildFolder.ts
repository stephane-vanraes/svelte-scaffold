import { splitChildren } from '$lib/utils';
import type JSZip from 'jszip';
import error from '../content/error';
import { plain, withCss } from '../content/layout';
import buildEndpoint from './buildEndpoint';
import buildPage from './buildPage';

function buildFolder(folder: App.Folder, zip: JSZip, folderparams: Array<string>, typescript : boolean) {
	const params: Array<string> = [...folder.name.matchAll(/\[[a-zA-Z]*\]/gm)].map((m) =>
		m[0].replace('[', '').replace(']', '')
	);

	folderparams = [...folderparams, ...params];

	zip = folder.name.length > 0 ? zip.folder(folder.name) : zip;

	folder.error && zip.file('__error.svelte', error);
	folder.layout && zip.file('__layout.svelte', plain);

	const { endpoints, folders, pages } = splitChildren(folder.children);

	endpoints.forEach((endpoint) => buildEndpoint(endpoint, zip, folderparams, typescript));
	pages.forEach((page) => buildPage(page, zip, typescript));
	folders.forEach((folder) => buildFolder(folder, zip, folderparams, typescript));
}

export default buildFolder;
