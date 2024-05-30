<script>
    import {artikkel} from '$lib/stores/artikkel'
    import imageUrlBuilder from '@sanity/image-url'
    import { PUBLIC_ENVPROJECTID, PUBLIC_ENVDATASET } from '$env/static/public'
    import {createClient} from "@sanity/client";

    const client = createClient({
        projectId: PUBLIC_ENVPROJECTID,
        dataset: PUBLIC_ENVDATASET,
        apiVersion: "2021-10-21",
        useCdn: false
    });

    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client)

    // Then we like to make a simple function like this that gives the
    // builder an image and returns the builder for you to specify additional
    // parameters:
    function urlFor(source) {
    return builder.image(source)
    }
</script>

<main class=" w-screen flex justify-center">
    <div class=" px-4 w-[1000px] place-items-center lg:max-w-[1000px]">
        <p class=" font-bold text-3xl mb-3">{$artikkel.Tittel}</p>
        <p class=" text-lg">{$artikkel.introduksjon}</p>
        <div class=" mt-5 pt-8 border-t border-gray-400">
            {#if $artikkel.tekst1}
                <p class=" my-2">{$artikkel.tekst1}</p>
            {/if}
            {#if $artikkel.bilde1}
                <img class=" max-w-[600px]" src={urlFor($artikkel.bilde1)} alt="bilde 1">
            {/if}
            {#if $artikkel.tekst2}
                <p class=" my-2">{$artikkel.tekst2}</p>
            {/if}
            {#if $artikkel.bilde2}
                <img class=" max-w-[600px]" src={urlFor($artikkel.bilde2)} alt="bilde 1">
            {/if}
            {#if $artikkel.tekst3}
                <p class=" my-2">{$artikkel.tekst3}</p>
            {/if}
            {#if $artikkel.bilde3}
                <img class=" max-w-[600px]" src={urlFor($artikkel.bilde3)} alt="bilde 1">
            {/if}
            {#if $artikkel.tekst4}
                <p class=" my-2">{$artikkel.tekst4}</p>
            {/if}
            {#if $artikkel.bilde4}
                <img class=" max-w-[600px]" src={urlFor($artikkel.bilde4)} alt="bilde 1">
            {/if}
            {#if $artikkel.tekst5}
                <p class=" my-2">{$artikkel.tekst5}</p>
            {/if}
            {#if $artikkel.bilde5}
                <img class=" max-w-[600px]" src={urlFor($artikkel.bilde5)} alt="bilde 1">
            {/if}
        </div>
    </div>
</main>
