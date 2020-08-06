<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import axios from 'axios';
    import LoaderIcon from './LoaderIcon.svelte';
    import Post from './Post.svelte';

	// postData state & API fetch
	let postData=[];
	onMount(async () =>{
		await axios.get('/api/')
			.then(function (response) {
				// handle success
                postData = response.data;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
    });
</script>

{#if postData.length > 0 }
    <ul transition:fade="{{duration:600}}">
        {#each postData as post}
            <li>
                <Post post={post} />
            </li>
        {/each}
    </ul>
{:else }
    <!-- placeholder during API call -->
    <div style="height:100vh">
        <LoaderIcon></LoaderIcon>
    </div>
{/if}

<style>
    ul {
        max-width: 560px;
        list-style: none;
        margin: 0 auto;
        padding: 0;
    }
    li {

    }
    div {
        text-align: center;
        position:relative;
        margin: 0 auto;
        top:40vh;
    }
</style>