export const GET = `
export async function get() {
    return {
        status: 200,
        body: {}
    }
}

`;

export const GETParams = `
export async function get({ params }) {
    const { REPLACE } = params;

    return {
        status: 200,
        body: {}
    }
}

`;

export const POST = `
export async function post() {
    return {
        status: 200,
        body: {}
    }
}

`;

export const POSTParams = `
export async function post({ params }) {
    const { REPLACE } = params;
    
    return {
        status: 200,
        body: {}
    }
}

`;

export const PUT = `
export async function put() {
    return {
        status: 200,
        body: {}
    }
}

`;

export const PUTParams = `
export async function put({ params }) {
    const { REPLACE } = params;
    
    return {
        status: 200,
        body: {}
    }
}

`;

export const PATCH = `
export async function patch() {
    return {
        status: 200,
        body: {}
    }
}

`;

export const PATCHParams = `
export async function patch({ params }) {
    const { REPLACE } = params;
    
    return {
        status: 200,
        body: {}
    }
}

`;

export const DEL = `
export async function del() {
    return {
        status: 200,
        body: {}
    }
}

`;

export const DELParams = `
export async function del({ params }) {
    const { REPLACE } = params;
    
    return {
        status: 200,
        body: {}
    }
}

`;
