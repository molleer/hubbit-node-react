const express = require("express");
const mysql = require("mysql");
const passport = require("passport");
const { initRouters } = require("./routers");
const { initMiddleware } = require("./middleware");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const app = express();
conn.connect();

const query = (query, vars, done) => conn.query(query, vars, done);

initMiddleware(app, passport);
initRouters(app, { query, passport }, () => express.Router());

app.listen(Number(process.env.PORT));
