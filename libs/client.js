import { createClient} from "microcms-js-sdk";

export const client = createClient({
    serviceDomain:"eiki-blog-nextjs",
    apiKey: process.env.API_KEY,
});