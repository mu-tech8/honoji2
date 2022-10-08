import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mu8",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
