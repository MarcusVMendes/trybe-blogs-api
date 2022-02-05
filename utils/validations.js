const Joi = require('joi');

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

const loginSchema = Joi.object({
  email: Joi.string().email().required()
.messages({
    required: '"email" is required',
    'string.empty': '"email" is not allowed to be empty', 
  }),
  password: Joi.string().required().messages({
    required: '"password" is required',
    'string.empty': '"password" is not allowed to be empty',
  }),
});

module.exports = {
  userSchema,
  loginSchema,
};

/*
Validate value options
'string.empty'
https://github.com/sideway/joi/blob/master/API.md#anyvalidatevalue-options

*/