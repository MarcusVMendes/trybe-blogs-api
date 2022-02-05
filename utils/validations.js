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

const categorieSchema = Joi.object({
  name: Joi.string().required().messages({
    required: '"name" is required',
  }),
});

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    required: '"title" is required',
  }),
  content: Joi.string().required().messages({
    required: '"content" is required',
  }),
  categoryIds: Joi.required().messages({
    required: '"categoryId" is required',
  }),
});

module.exports = {
  userSchema,
  loginSchema,
  categorieSchema,
  postSchema,
};

/*
Validate value options
'string.empty'
https://github.com/sideway/joi/blob/master/API.md#anyvalidatevalue-options

*/