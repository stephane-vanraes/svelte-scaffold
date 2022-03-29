export default `
export async function handle({ event, resolve }) {

    const result = resolve(event);

    return result;
}

export async function getSession(event) {
    return event.locals;
}
`