import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app
 

/* postgress

postgresql://DBase_1_owner:H2YqolJteg0s@ep-steep-frost-a1mpzhk8.ap-southeast-1.aws.neon.tech/DBase_1?sslmode=require
*/

/*
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOThkZWZjZGItNGE0YS00MGU0LWJhNTYtMjExODEyYzRkMmIyIiwidGVuYW50X2lkIjoiMmJjYzhiMzYwYTkzN2ExNzU2YTJkZjE3MTI2MWRiNTY2ZDRhM2MyYWM4NDM1MTZjYzc3ZGUzYjk1N2VkZTJjNyIsImludGVybmFsX3NlY3JldCI6ImYxYzlhNWQ4LWYwZjQtNDVjOC1iMjZhLWExY2M0MTcxMDQyOSJ9.cgBpfkxl6WMuNiNnXDpN9msCpRFvbu2PI3jOGfXeO2U"
*/


// Deployed on cloudflare worker