const router = require("express").Router();

router.post("/register", (request: any, response: any) => {
  response.send("Register");
});

module.exports = router;
