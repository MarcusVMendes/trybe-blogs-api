const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.name': '"displayName" lenght must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    email: '"email" must be a valid email',
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