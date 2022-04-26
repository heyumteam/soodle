<script lang='ts'>
    import type { CharStatus } from './char';

    let status: CharStatus | undefined = undefined
    let char: string | undefined = undefined
</script>

<div class='cell'>
    <div class='character'>
        {char ?? ''}
    </div> 
</div>

<style>
    div.cell {
        display: flex;
        border: 0.15em solid grey;
        width: 3em;
        height: 3em;
        justify-content: center;
        align-items: center;
        border-radius: 10%;
        margin: 0.2em;
    }

    div.character {
        font-size: large;
        font-weight: 700;
    }
</style>