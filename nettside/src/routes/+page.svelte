<script>
    import BlogPost from "../lib/components/blogPost.svelte";
    import {artikler} from '$lib/stores/artikler'
    import { onMount } from "svelte";

    console.log($artikler)
</script>

<main class=" w-screen flex justify-center">
    <div class=" grid grid-cols-2 px-4 gap-5 w-fit place-items-center lg:max-w-[1200px]">
        {#each $artikler as artikell}
            <BlogPost blogArtikell={artikell}/>
        {/each}
    </div>
</main>