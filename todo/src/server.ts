import "dotenv/config"
import Fastify from "fastify"
import { todoRoutes } from "./routes/todoRoutes"

const app = Fastify()

app.get("/", async () => {
  return { message: "Todo API running" }
})

app.register(todoRoutes)

const start = async () => {
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

  await app.listen({
    port: PORT,
    host: '0.0.0.0'
  })

  console.log(`Server running on http://localhost:${PORT}`)

}

start()