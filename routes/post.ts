const route = require("express").Router();
const verifyLoggedin = require("./proctectedRoute");

route.get("/", verifyLoggedin, (request: any, response: any) => {
  response.json({
    posts: {
      title: "Post Title",
      description: "Post description",
    },
  });
});

module.exports = route;
