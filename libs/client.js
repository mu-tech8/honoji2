import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mu8",
  apiKey: process.env.API_KEY,
});
