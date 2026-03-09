import { Client } from "@elastic/elasticsearch"

export const esClient = new Client({
  node: "https://localhost:9200",
  auth: {
    username: "elastic",
    password: "tU23Bo3FYzAm0tSg-wFE"
  },
  tls: {
    rejectUnauthorized: false
  }
})