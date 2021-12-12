const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// routes
const protectedRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();

// Connect to DB and
mongoose.connect(process.env.DB_Connection, console.log("Connected to DB"));

// middleware
app.use(express.json());

// route middleware

app.use("/api/user", protectedRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
  console.log("Server Running");
});
