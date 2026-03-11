import { FastifyInstance } from "fastify"
import { esClient } from "../elastic"

export async function todoRoutes(app: FastifyInstance) {

  // CREATE TODO
  app.post("/todos", async (request) => {

    const body = request.body

    const result = await esClient.index({
      index: "todos",
      document: body
    })

    return {
      message: "Todo created",
      id: result._id
    }
  })



  // GET ALL TODOS
  app.get("/todos", async () => {

    const result = await esClient.search({
      index: "todos",
      query: {
        match_all: {}
      }
    })

    return result.hits.hits
  })



  // UPDATE TODO
  app.put("/todos/:id", async (request) => {

    const { id } = request.params as { id: string }
    const body = request.body

    const result = await esClient.update({
      index: "todos",
      id: id,
      doc: body
    })

    return {
      message: "Todo updated",
      result
    }
  })



  // DELETE TODO
  app.delete("/todos/:id", async (request) => {

    const { id } = request.params as { id: string }

    const result = await esClient.delete({
      index: "todos",
      id: id
    })

    return {
      message: "Todo deleted",
      result
    }
  })

}