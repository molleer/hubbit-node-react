const express = require("express");

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.listen(PORT);
