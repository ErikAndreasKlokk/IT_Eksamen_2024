<script>
    import BlogPost from "../lib/components/blogPost.svelte";
    import {artikler} from '$lib/stores/artikler'
    import { onMount } from "svelte";
</script>

<main class=" w-screen flex justify-center">
    <div class=" grid grid-cols-1 md:grid-cols-2 px-4 gap-5 w-fit place-items-center lg:max-w-[1200px]">
        <!-- Printer ut alle bloggene som er laget i sanity på nettsiden -->
        {#each $artikler as artikell}
            <BlogPost blogArtikell={artikell}/>
        {/each}
    </div>
</main>