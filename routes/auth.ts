const router = require("express").Router();
const User = require("../model/user/user");
const bcrypt = require("bcrypt");
//TODO : Fix validation
// const { loginValidation, registerValidation } = require("../utils/validation");

router.post("/register", async (request: any, response: any) => {
  //TODO : Fix validation
  // const {error} = registerValidation(request.body)
  //response.send(validaitonCheck);

  // check user registred user is in DB
  const userExist = await User.findOne({
    email: request.body.email,
  });

  if (userExist) {
    return response.status(400).send("User email already exists");
  }

  //  Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    response.send(savedUser);
  } catch (err) {
    response.status(400).send(err);
  }
});

module.exports = router;
