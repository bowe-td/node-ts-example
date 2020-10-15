import joi from 'joi';

export default joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required(),
});
