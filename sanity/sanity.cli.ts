import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_STUDIO_DATASET,
    dataset: process.env.PUBLIC_SANITY_STUDIO_DATASET
  }
})
