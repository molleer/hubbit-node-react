const express = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const app = express();
conn.connect();

app.get("/", (_, res) => {
  conn.query("SELECT * FROM users", (err, data) => {
    res.json(data);
  });
});

app.listen(Number(process.env.PORT));
