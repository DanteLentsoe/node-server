const router = require("express").Router();
const User = require("../model/user/user");
const bcrypt = require("bcrypt");
//TODO : Fix validation
// const { loginValidation, registerValidation } = require("../utils/validation");

// Register User
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
    response.send({ user: user._id });
  } catch (err) {
    response.status(400).send(err);
  }
});

// Login User
router.post("/login", async (request: any, response: any) => {
  // check user email in DB
  const userExist = await User.findOne({
    email: request.body.email,
  });

  if (!userExist) {
    return response.status(400).send("User email does not exist");
  }

  //check password correct
  const validPassword = await bcrypt.compare(
    request.body.password,
    userExist.password
  );

  if (!validPassword) {
    return response.status(400).send("User password is not valid");
  }

  response.send("Logged In");
});

module.exports = router;
