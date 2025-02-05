import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.get('/', async (c) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments = await response.json()
  return c.json(comments)
})

app.get('/comments/:id', async (c) => {
  const id = c.req.param('id')
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
  const comments = await response.json()
  return c.json(comments)
})

app.post('/comments', (c) => c.text('Created!', 201))

app.delete('/comments/:id', (c) =>
  c.text(`${c.req.param('id')} is deleted!`)
)

app.get('/say', (c) => {
  return c.text('Good morning!')
})

app.use(
  '/admin/*',
  basicAuth({
    username: 'admin',
    password: 'secret',
  })
)

app.get('/admin', (c) => {
  return c.text('You are authorized!')
})

export default app
