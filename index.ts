import express from 'express';

import routes from './src/routes';
import HandleError from './src/middlewares/HandleError';
import db from './src/config/db';
import dotenv from './src/config/dotenv';

dotenv();

const app = express();

app.use(HandleError);
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started!');
  db();
});
