import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express app is running on port ${port}.`);
});
