const { handleGetDevices } = require("../controllers/user.controller");
const {
  handleCheckLogin,
  handleGammaCallback,
  handleGammaLogin,
} = require("../controllers/authentication.controller");
const { checkGammaLogin } = require("../middleware");

const unprotectedRoutes = (router, tools) => {
  router.get("/login", handleGammaLogin(tools));
  router.get("/callback", handleGammaCallback(tools), handleCheckLogin(tools));

  return router;
};

const protectedRoutes = (router, tools) => {
  router.get("/checkLogin", checkGammaLogin, handleCheckLogin(tools));
  router.get("/devices", checkGammaLogin, handleGetDevices(tools));

  return router;
};

const initRouters = (app, tools, createRouter) => {
  app.use("/api", unprotectedRoutes(createRouter(), tools));
  app.use("/api", protectedRoutes(createRouter(), tools));
};

module.exports = { initRouters };
