const express = require("express");

const app = express();

// middleware
app.use(express.json())

app.get("/", (request, response) => {
  response.json({
    message: "koders APIv1",
  });
});

module.exports = app;
