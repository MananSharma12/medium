import {Hono} from 'hono'
import {PrismaClient} from '@prisma/client'
import {withAccelerate} from "@prisma/extension-accelerate"

const app = new Hono()
const apiV1 = new Hono<{ Bindings: { DATABASE_URL: string } }>()

app.route('/api/v1', apiV1)

apiV1.post('/user/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

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
