import express from 'express';

import { getProjects, init } from './database';

async function main() {
  await init();

  const app = express();
  const port = 3000;

  app.get('/', async (req, res) => {
    const rows = await getProjects();
    res.send('Hello World! ' + JSON.stringify(rows));
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
  });
}

main();
