const express = require("express");
const { init } = require("./gamma.strategy");
const session = require("express-session");

const initMiddleware = (app, passport) => {
  //Passport
  init(passport);
  app.use(express.urlencoded({ extended: false }));
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  //Other
  app.use(express.json());
};

const checkGammaLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send(process.env.HOST + "/api/login");
};

module.exports = { initMiddleware, checkGammaLogin };
