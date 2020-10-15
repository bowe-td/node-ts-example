import express from 'express';

import HandleError from 'commons/middlewares/HandleError';
import db from 'config/db';
import logger from 'config/logger';
import dotenv from 'config/dotenv';
import routes from 'routing';

dotenv();

const app = express();

app.use(express.json());
app.use(routes);
app.use(HandleError);

app.listen(3333, () => {
  logger.log({ level: 'info', message: 'Server started on port 3333!' });
  db();
});
