const { getUserDevices } = require("../repositories/user.repository");

const handleGetDevices =
  ({ query }) =>
  (_, res) => {
    getUserDevices(query, "admin") //TODO: Use sender cid
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  };

module.exports = { handleGetDevices };
