import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
type Post = {
  id: string;
  title: string;
};

const posts: Post[] = [
  { id: "1", title: "Introduction to TypeScript" },
  { id: "2", title: "Understanding JavaScript Closures" },
  { id: "3", title: "React vs Vue: A Comparison" },
  { id: "4", title: "Node.js Performance Tips" },
  { id: "5", title: "How to Build a REST API with Express" }
];

const allRoutes = new Hono()
allRoutes.use(cors({
  origin: "http://localhost:4000"
}));
allRoutes.get('/posts',async (c) => {
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a delay
  return c.json(posts, 200);
});

serve(allRoutes,({port}) => {
  console.log(`Server is running on http://localhost:${port}`)
})
