<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import axios from 'axios';
    import LoaderIcon from './LoaderIcon.svelte';
    import Post from './Post.svelte';

    // get post data
    const getData = async (filePath) => {
        try {
            // return data from cache file
            const response = await axios.get(filePath);
            return response.data;
        } 
        catch (err) {
            console.error(err);
            console.error('data cache file not found: trying Airtable API');
            // if error, try to return data from API
            const response = await axios.get('/api/');
            return response.data;
        };
    };

	// postData state & API fetch
	let postData=[];
	onMount(async () =>{
        postData = await getData('data.json');
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