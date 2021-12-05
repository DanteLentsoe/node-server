const express = require("express");

const app = express();

// routes
const protectedRoute = require("./routes/auth");

// route middleware

app.use("api/user", protectedRoute);

app.listen(3000, () => {
  console.log("Server Running");
});
