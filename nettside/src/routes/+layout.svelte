<script>
    import "../app.css";
    import { PUBLIC_ENVPROJECTID, PUBLIC_ENVDATASET } from '$env/static/public'
    import {createClient} from "@sanity/client";
    import { onMount } from "svelte";

    const client = createClient({
          projectId: PUBLIC_ENVPROJECTID,
          dataset: PUBLIC_ENVDATASET,
          apiVersion: "2021-10-21",
          useCdn: false
      });

      onMount(async () => {
        const blogArtikler = await client.fetch(`*[_type == "blogartikler"]`);

        console.log(blogArtikler)
      })
</script>

<slot/>