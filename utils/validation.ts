// Validation
const Joi = require("joi");

//TODO : Fix validation
// Register Validation

const RegisterValidation = (data: any) => {
  const schemaValidation = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(6).required(),
  });

  //TODO : Fix validation
  return Joi.validate(data, schemaValidation);
};

// Login Validation
const LoginValidation = (data: any) => {
  const schemaValidation = Joi.object({
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(6).required(),
  });

  //TODO : Fix validation
  return Joi.validate(data, schemaValidation);
};

module.exports.RegisterValidation = RegisterValidation;
module.exports.LoginValidation = LoginValidation;
