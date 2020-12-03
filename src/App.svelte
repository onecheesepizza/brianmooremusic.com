<script>
	import ContactLink from './components/ContactLink.svelte';
	import Posts from './components/Posts.svelte';
	import Contact from './components/Contact.svelte';
	import Footer from './components/Footer.svelte';

	//dev tag
	console.log(`
	developed by zebranode 🦓
	https://zebranode.dev
	https://github.com/zebranode
	`);
</script>

<main>
	<ContactLink/>
	<Posts/>
	<Contact/>
	<Footer/>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	:global(html){
		background: #000 url(/images/jack.jpg) no-repeat center center; 
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-attachment: fixed;
		scroll-behavior: smooth;
	}
	:global(body) {
		padding:0;
		margin:0;
		color:white;
		font-family: 'Karla', sans-serif;
		line-height: 1.5;
		font-size: 1em;
	}
	:global(a) {
		color:white;
		opacity:.8;
		text-decoration: none;
		transition: opacity .5s;
	}
	:global(a):hover {
		opacity:1;
	}
</style>