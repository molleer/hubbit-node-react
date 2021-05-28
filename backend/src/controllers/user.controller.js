const {
  getUserDevices,
  createUserDevice,
} = require("../repositories/user.repository");

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

const handleCreateDevice =
  ({ query }) =>
  (req, res) => {
    createUserDevice(query, req.user.cid, req.body)
      .then(() => {
        res.status(201).end();
      })
      .catch(() => {
        res.status(400).end();
      });
  };

module.exports = { handleGetDevices, handleCreateDevice };
