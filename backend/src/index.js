const express = require("express");
const mysql = require("mysql");
const { initRouters } = require("./routers");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const app = express();
conn.connect();

const query = (query, vars, done) => conn.query(query, vars, done);

initRouters(app, { query }, () => express.Router());

app.listen(Number(process.env.PORT));
