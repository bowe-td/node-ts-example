import joi from 'joi';

export default joi.object().keys({
  fullName: joi.string(),
  phone: joi.string(),
  email: joi.string(),
  maritalStatus: joi.string(),
  gender: joi.string(),
  raceColor: joi.string(),
  PCD: joi.boolean(),
  profilePicture: joi.string(),
});
