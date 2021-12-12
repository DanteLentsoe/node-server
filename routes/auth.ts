const router = require("express").Router();
const User = require("../model/user/user");

// Validation
const Joi = require("joi");

/*
*
*
*
  //TODO : Fix validation
const schemaValidation = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(8).required().email(),
  password: Joi.string().min(6).required(),
});
*
*
*/
router.post("/register", async (request: any, response: any) => {
  console.log("types check ", response);
  //TODO : Fix validation
  // const validaitonCheck = Joi.validaiton(request.body);

  //TODO : Fix validation
  //response.send(validaitonCheck);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  });

  try {
    const savedUser = await user.save();
    response.send(savedUser);
  } catch (err) {
    response.status(400).send(err);
  }
});

module.exports = router;
