import { Hono } from 'hono'

const app = new Hono()
const apiV1 = new Hono()

app.route('/api/v1', apiV1)

apiV1.post('/user/signup', (c) => {
  return c.text('Hello Hono!')
})

apiV1.post('/user/signin', (c) => {
  return c.text('Hello Hono!')
})

apiV1.post('/blog', (c) => {
  return c.text('Hello Hono!')
}).put((c) => {
  return c.text('Hello Hono!')
})

apiV1.get('/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

apiV1.get('/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
