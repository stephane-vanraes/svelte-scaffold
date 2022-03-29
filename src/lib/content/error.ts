export default `
<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        message,
        status
      }
    };
  }
</script>

<script>
  export let message;
  export let status;
</script>

<h1>{status} {message}</h1>
`;