import mongoose from 'mongoose';

export default (configs?: any): void => {
  const { DB_HOST } = process.env;
  const { connect } = mongoose;
  const uri = `mongodb://${DB_HOST}/my_database`;
  const defaultConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ...configs,
  };

  connect(uri, defaultConfigs, () => console.log('Connected to MONGODB'));
};
