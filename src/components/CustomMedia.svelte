<script>
    import { fade } from 'svelte/transition';
    import Lazy from 'svelte-lazy';
    import LoaderIcon from './LoaderIcon.svelte';

    export let title;
    export let media;
</script>

<div>
    <Lazy height={315} offset={300} >
        <div transition:fade="{{duration:600}}">
            <img alt="{title}" src="/media/images/{media.image}">
            {#each media.audio as file}
            <audio 
            controls
            controlsList="nodownload"
            preload="none">
                <source src="/media/audio/{file}">
                <p>Your browser does not support HTML5 audio.</p>
            </audio>
            {/each}
        </div>
    </Lazy> 
</div>

<style>
    div { 
        padding-bottom:.1em;
        margin:0;
        background-color:black;
		position: relative; 
        height:100%;
        max-width: 100%; 
    } 
    img {
        max-width: 100%;
        margin:0;
    }
    audio {
        display:block;
        width: 95%;
        margin: .25em auto;
    }
    span {
        display: inline-block;
        position:absolute;
        text-align:center;
        transform:scale(.5);
    }
</style>