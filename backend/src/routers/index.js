const { handleGetDevices } = require("../controllers/user.controller");

const unprotectedRoutes = (router, tools) => {
  router.get("/devices", handleGetDevices(tools));
  return router;
};

const initRouters = (app, tools, createRouter) => {
  app.use("/api", unprotectedRoutes(createRouter(), tools));
};

module.exports = { initRouters };
