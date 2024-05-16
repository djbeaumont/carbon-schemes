import express from 'express';
import cors from 'cors';

import { getProjects, init } from './database';

async function main() {
  await init();

  const app = express();

  // TODO - find out why chrome is sending null origin
  // const corsOptions = { origin: process.env.ALLOWED_ORIGINS ?? 'http://localhost:5010' };
  app.use(cors());

  app.get('/projects', async (req, res) => {
    const projects = await getProjects();
    res.json(projects);
  });

  const port = process.env.PORT ?? 3000;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
  });
}

void main();
