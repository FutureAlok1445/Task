import Fastify from "fastify"

const app = Fastify()

app.get("/", async (request, reply) => {
  return { message: "Hello World" }
})

const start = async () => {
  try {
    await app.listen({ port: 3000 })
    console.log("Server running on http://localhost:3000")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()