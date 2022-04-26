<script>
    import { WORD_LENGTH } from '../config';
    import Cell from './Cell.svelte';

    const emptyTiles = Array.from(Array(WORD_LENGTH));
</script>

<div class='row'>
    {#each emptyTiles as _}
        <Cell />
    {/each}
</div>

<style>
    div.row {
        display: flex;
    }
</style>