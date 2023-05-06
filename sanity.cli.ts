import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from "@constants/sanityConfig";

export default defineCliConfig({
    api: {
        projectId,
        dataset
    }
})
