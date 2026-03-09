import Fastify from "fastify"
import { esClient } from "./elastic"

const app = Fastify()

app.get("/", async () => {
  return { message: "Elasticsearch API Running" }
})

app.post("/data", async (request) => {

  const body = request.body

  const result = await esClient.index({
    index: "tasks",
    document: body
  })

  return result
})

app.get("/data", async () => {

  const result = await esClient.search({
    index: "tasks",
    query: {
      match_all: {}
    }
  })

  return result.hits.hits
})

const start = async () => {
  await app.listen({ port: 3000 })
  console.log("Server running on http://localhost:3000")
}

start()