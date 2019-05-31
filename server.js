const express = require("express")
const next = require("next")

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== "production" })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get("*", (req, res) => handle(req, res))

  // TODO: Add /details/:id route handler

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
  })
})
