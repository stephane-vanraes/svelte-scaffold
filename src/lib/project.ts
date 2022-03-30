import { writable } from "svelte/store";

const project = (() => {
    
    const store = writable<App.Project>({
        name: "",
        hooks: false,
        routes: {
            children: [{
                name: 'index',
                type: 'page'
        
            }],
            error: false,
            layout: false,
            name: '',
            type: 'folder'
        }
    });


    const addEndpoint = (children) => [
        ...children, {
			name: '',
			methods: {},
			type: 'endpoint'
        }]

    const addFolder = (children) => [
        ...children, {
            children: [
                {
                    name: 'index',
                    type: 'page'
                }
            ],
            name: '',
            type: 'folder'
        }]


    const addPage = (children) => [
        ...children, {
            name: '',
            type: 'page'
        }]

    const deleteElement = (children, element) => children.filter(child => child != element)

    return {
        addEndpoint,
        addFolder,
        addPage,
        deleteElement,
        ...store
    }
})()



export default project