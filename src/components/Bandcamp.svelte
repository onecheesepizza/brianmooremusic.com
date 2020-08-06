<script>
    import Lazy from 'svelte-lazy';
    import LoaderIcon from './LoaderIcon.svelte';

    export let title;
    export let bandcamp;

    let iframeLoaded = false;

    function handleLoad(){
        iframeLoaded = true;
    }
    
</script>

<div>
    <span class="{!iframeLoaded ? "visible" : "hidden"}">
        <LoaderIcon/>
    </span>
    <Lazy height={315} offset={300}>
        <iframe 
        title="{title}"
        style="border: 0; width: 315px; height: 315px;" 
        src="https://bandcamp.com/EmbeddedPlayer/album={bandcamp.albumId}/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/" 
        on:load={handleLoad}
        seamless><a href="{bandcamp.url}">{title}</a>
        </iframe>
    </Lazy> 
</div>

<style>
    div { 
        padding:0 auto;
        margin:0;
        background-color:rgb(24, 24, 24);
		position: relative; 
        height:315px;
        max-width: 100%; 
    } 
    iframe { 
        display:block;
        margin:0 auto;
		width: 100%; 
        height: 100%; 
    }
    .hidden {
        opacity:0;
    }
    .visible {
        opacity:1;
        transition: .5s ease-out;
    }
    span {
        display: block;
        position:absolute;
        left:0;
        right:0;
        top:30%;
        text-align:center;
        transform:scale(.5);
    }
</style>