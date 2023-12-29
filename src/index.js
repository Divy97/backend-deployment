const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Route",
  });
});

app.get("/login", (req, res) => {
  res.send(`
        <h1>Login</h1>
        <button>Login</button>
    `);
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running at ${process.env.PORT}`);
});
