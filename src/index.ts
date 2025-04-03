import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/ping', (c) => c.json({ pong: 'Hello, World' }))


app.get('/college', (c) => c.json({ message: 'Hello SIT' }))

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('Server running at http://localhost:3000')
