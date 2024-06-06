const cors = require("cors")

const express = require("express");

const kodersRouter = require("./routes/koders.router");

const mentorsRouter = require("./routes/mentors.router");

const authRouter = require("./routes/auth.router");

const generationRouter = require("./routes/generations.router");

const app = express();

// middleware
app.use(cors())
app.use(express.json());

app.use("/koders", kodersRouter);

app.use("/mentors", mentorsRouter);

app.use("/auth", authRouter);

app.use("/generations", generationRouter);

app.get("/", (request, response) => {
  response.json({
    message: "koders APIv1",
  });
});


module.exports = app;
