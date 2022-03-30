import JSZip from 'jszip';
import hooksContent from '$lib/content/hooks';
import buildFolder from '$lib/builders/buildFolder';

export async function post(data) {
    //const data : App.Project = await request.json();
    const zip = new JSZip();

    if (data.hooks) {
        zip.file('hooks.js', hooksContent)
    }

    buildFolder(data.routes, zip, [])

    const file = await zip.generateAsync({ 
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 9
        }
    })

    return file

    return {
        status: 200,
        body: file,
        headers: {
            "Content-Type": "application/zip"
        }
    }

}