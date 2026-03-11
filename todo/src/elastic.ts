import { Client } from "@elastic/elasticsearch"

export const esClient = new Client({
  node: process.env.ELASTIC_NODE || "https://localhost:9200",
  auth: {
    apiKey: process.env.ELASTIC_PASSWORD || "YOUR_PASSWORD"
  },
})