import joi from 'joi';

export default joi.string().alphanum().length(24);
