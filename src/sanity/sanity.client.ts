import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "igfmood2",
    dataset: "production",
    apiVersion: "2024-10-12",
    useCdn: false,
};

const client = createClient(config);

export default client;