<script>
    import { onMount } from "svelte";
    import Lazy from 'svelte-lazy';
    import LoaderIcon from './LoaderIcon.svelte';

    export let videoUrl;
    export let videoTitle;
    let iframeLoaded = false;

    function handleLoad(){
        iframeLoaded = true;
    }
    function formatYoutubeUrl(youtubeUrl) {
        const origUrl = new URL(youtubeUrl);
        const params = new URLSearchParams(origUrl.search);
        let newUrl;

        //check for short URL
        if (origUrl.host==="youtu.be") {
            newUrl = "https://www.youtube-nocookie.com/embed"+origUrl.pathname;
        //check for playlist URL
        } else if (params.get("list")) {
            newUrl = "https://www.youtube-nocookie.com/embed/videoseries?list="+params.get("list");
        //check for normal video URL
        } else if (params.get("v")){
            newUrl = "https://www.youtube-nocookie.com/embed/"+params.get("v");
        }
        //append timestamp parameter
        if (params.get("t")){
            newUrl+='?start='+params.get("t")
        }
        return newUrl;
    }
</script>

<div>
    <Lazy height={315} offset={300}>
        <iframe 
        title="{videoTitle} - Music Video"
        src={formatYoutubeUrl(videoUrl)} 
        class="{iframeLoaded ? "visible" : "hidden"}"
        on:load={handleLoad}
        width="560" 
        height="315" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen/>
    </Lazy>
    <span class="{!iframeLoaded ? "visible" : "hidden"}">
        <LoaderIcon/>
    </span>
    
</div>

<style>
    div { 
		position: relative; 
		padding-bottom: 56.25%; 
		height: 0; 
		overflow: hidden; 
        max-width: 100%; 
        background-color:black;
    } 
    iframe { 
		position: absolute; 
		top: 0; 
		left: 0; 
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
        position:relative;
        padding-top:20%;
        text-align:center;
        transform:scale(.5);
    }
</style>