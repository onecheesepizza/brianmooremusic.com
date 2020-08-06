<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    //smooth scroll polyfill for safari
    import smoothscroll from 'smoothscroll-polyfill';
    smoothscroll.polyfill();

    //scroll handler
    function scrollToContact() {
        document.querySelector('#contact').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    //load state for transition
    let loaded = false;
    onMount(()=>{
        loaded=true;
    })
</script>

{#if loaded }
    <div transition:fade="{{duration:600}}">
        <a href="#contact" on:click={scrollToContact}>contact</a>
    </div>
{/if}

<style>
    div {
        margin: 2em auto;
        max-width:560px;
        height:100%;
        text-align: right;
    }
    a{
        margin:3em 1em 1em auto;
    }
</style>