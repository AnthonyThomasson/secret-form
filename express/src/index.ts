import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(
  '/api',
  express
    .Router()
    .use(express.json())
    .use(cors()),
);

const staticDir = path.join(`${__dirname}/views`);
app.use(express.static(staticDir));
app.get('/*', (req, res) => {
  res.sendFile(`${staticDir}/index.html`);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express app is running on port ${port}.`);
});
