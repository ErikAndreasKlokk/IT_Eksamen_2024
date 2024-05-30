<script>
    import {artikkel} from '$lib/stores/artikkel'
    export let blogArtikell;
    console.log(blogArtikell)

</script>

<a on:click={() => $artikkel = blogArtikell} href="/blogg" alt="Link til blogg" class=" w-96 h-52 border border-gray-400 hover:border-gray-700 shadow-md hover:scale-[1.03] transition rounded-lg flex flex-col justify-between p-2">
    <div class=" overflow-hidden relative">
        <p class=" font-bold text-lg mb-2">{blogArtikell.Tittel}</p>
        <p>{blogArtikell.introduksjon}</p>
    </div>
    <p class=" self-end text-sm text-gray-500 font-medium">{blogArtikell._createdAt}</p>
</a>