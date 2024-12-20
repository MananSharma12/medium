import {Hono} from 'hono'
import {PrismaClient} from '@prisma/client/edge'
import {withAccelerate} from "@prisma/extension-accelerate"

const app = new Hono()

app.post('/api/v1/user/signup', async (c) => {
    const prisma = new PrismaClient().$extends(withAccelerate())

    const body = await c.req.json();
    const {email, password} = body

    await prisma.user.create({
        data: {
            email,
            password
        }
    })

    return c.text('Hello Hono!')
})

app.post('/api/v1/user/signin', (c) => {
    return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
}).put((c) => {
    return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
    return c.text('Hello Hono!')
})

export default app
