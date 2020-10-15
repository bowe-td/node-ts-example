import { ConnectionOptions, connect } from 'mongoose';
import logger from './logger';

export default (configs?: ConnectionOptions): void => {
  const { DB_HOST } = process.env;
  const uri = `mongodb://${DB_HOST}/my_database`;
  const defaultConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ...configs,
  };

  connect(uri, defaultConfigs, (err) => {
    const logInfo = { message: 'Connected to MONGODB', level: 'info' };
    if (err) {
      logInfo.message = `Failed to connect to MONGODB\n${err}`;
      logInfo.level = 'error';
    }

    logger.log(logInfo);
  });
};

export const testConnect = (callback?: () => void): void => {
  const uri = 'mongodb://localhost/my_test_database';
  const defaultConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  connect(uri, defaultConfigs, (err) => {
    const logInfo = { message: 'Connected to MONGODB Test', level: 'info' };
    if (err) {
      logInfo.message = `Failed to connect to MONGODB Test\n${err}`;
      logInfo.level = 'error';
    }

    logger.log(logInfo);
    if (callback) {
      callback();
    }
  });
};
