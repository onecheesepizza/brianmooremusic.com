<script>
    import Youtube from "./Youtube.svelte";
    import Bandcamp from "./Bandcamp.svelte";
    import CustomMedia from "./CustomMedia.svelte";
    export let post;

    function unpackCredits(rawText){
        // remove last newline
        rawText.slice(0,-1);
        // replace other newlines with <br>, wrap <br> with closing <span> and new open <span>
        return rawText.replace(/(?:\r\n|\r|\n)/g, '</span><br><span>');
    }
</script>

<div>
    <h2>{post.title}</h2>
    <!-- credits -->
    <p>
        <span>{@html unpackCredits(post.credits)}</span>
    </p>
    <!-- youtube embed -->
    {#if post.youtube}
        <Youtube 
            videoTitle={post.title}
            videoUrl={post.youtube}/>
    {/if}
    <!-- bandcamp embed --><!-- only show if youtube is false -->
    {#if post.bandcamp && !post.youtube}
        <Bandcamp title= {post.title} bandcamp={post.bandcamp}/>
    {/if}
    <!-- custom media --><!-- only show if bandcamp is false -->
    {#if post.customMedia && !post.youtube && !post.bandcamp}
        <CustomMedia title={post.title} media={post.customMedia}/>
    {/if}
</div>

<style>
    div {
        margin: 0em 0em 8em 0em;
    }
    h2, p {
        width:100%;
        max-width:560px;
        box-sizing:border-box; 
        background-color:black;
        padding-left: 15px;
        padding-right:15px;
        padding-top:15px;
    }
    h2 {
        font-size: 3em;
        margin:0;
        line-height: 1em;
    }
    p {
        margin:0;
        padding-bottom: 15px;
    }
    @media only screen and (max-width: 600px) {
        h2 {
            font-size:2em;
        }
    }
</style>