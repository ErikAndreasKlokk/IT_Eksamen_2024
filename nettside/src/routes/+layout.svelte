<script>
  import "../app.css";
  import { PUBLIC_ENVPROJECTID, PUBLIC_ENVDATASET } from '$env/static/public'
  import {createClient} from "@sanity/client";
  import { onMount } from "svelte";
  import Header from "../lib/components/header.svelte";
  import {artikler} from '$lib/stores/artikler'


  // Kode er hentet fra sanity svelte-kit docs (https://www.sanity.io/docs/connect-your-content-to-sveltekit)
  const client = createClient({
        projectId: PUBLIC_ENVPROJECTID,
        dataset: PUBLIC_ENVDATASET,
        apiVersion: "2021-10-21",
        useCdn: false
    });

    onMount(async () => {
      const blogArtikler = await client.fetch(`*[_type == "blogartikler"]`);
      $artikler = blogArtikler
    })
</script>

<html lang="en">
  <Header/>
  <slot/>
</html>