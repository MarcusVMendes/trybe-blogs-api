const Joi = require('@hapi/joi');

const validEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.name': '"displayName" lenght must be at least 8 characters long',
  }),
  email: Joi.string().regex(validEmail).required().messages({
    regex: '"email" must be a valid email',
    required: '"email" is required',
  }),
  password: Joi.string().length(6).required().messages({
    'string.lenght': '"password" length must be 6 characters long',
     required: '"password" is required',
  }),
  image: Joi.string(),
});

module.exports = {
  userSchema,
};