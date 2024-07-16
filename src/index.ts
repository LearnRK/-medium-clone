import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'



const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  }
}>()

app.post('/api/v1/user/signup', async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  //add zod and password hashing

try {
  await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
      name: body.name
    }
  })

  return c.text('User created');
} catch (e) {
  console.log(e);
  c.status(411);
  return c.text('Invalid');
}
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/user/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/user/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/user/blog/blog', (c) => {
  return c.text('Hello Hono!')
})

export default app
 

/* postgress

postgresql://DBase_1_owner:H2YqolJteg0s@ep-steep-frost-a1mpzhk8.ap-southeast-1.aws.neon.tech/DBase_1?sslmode=require
*/

/*
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOThkZWZjZGItNGE0YS00MGU0LWJhNTYtMjExODEyYzRkMmIyIiwidGVuYW50X2lkIjoiMmJjYzhiMzYwYTkzN2ExNzU2YTJkZjE3MTI2MWRiNTY2ZDRhM2MyYWM4NDM1MTZjYzc3ZGUzYjk1N2VkZTJjNyIsImludGVybmFsX3NlY3JldCI6ImYxYzlhNWQ4LWYwZjQtNDVjOC1iMjZhLWExY2M0MTcxMDQyOSJ9.cgBpfkxl6WMuNiNnXDpN9msCpRFvbu2PI3jOGfXeO2U"
*/