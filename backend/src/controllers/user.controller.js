const { getUserDevices } = require("../repositories/user.repository");

const handleGetDevices =
  ({ query }) =>
  (req, res) => {
    getUserDevices(query, req.user.cid)
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  };

module.exports = { handleGetDevices };
