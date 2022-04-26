<script>
    import { MAX_TRIAL } from '../config';
    import Row from './Row.svelte';

    const emptyTiles = Array.from(Array(MAX_TRIAL));
</script>

<div>
    {#each emptyTiles as _}
        <Row />
    {/each}
</div>
