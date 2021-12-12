const jwt = require("jsonwebtoken");

module.exports = function (request: any, response: any, next: any) {
  const getToken = request.header("auth-token");

  if (!getToken) {
    return response.send(401).send("Access Denied");
  }

  try {
    const verifyToken = jwt.verify(getToken, process.env.TOKEN_SERCRET);

    request.user = verifyToken;

    next();
  } catch (err) {
    if (err) {
      console.log(err);
      return response.send(400).send("Invalid Token");
    }
  }
};
