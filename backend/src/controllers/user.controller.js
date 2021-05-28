const {
  getUserDevices,
  createUserDevice,
  deleteUserDevice,
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
      .then(() => res.status(201).end())
      .catch(() => res.status(400).end());
  };

const handleDeleteDevice =
  ({ query }) =>
  (req, res) => {
    deleteUserDevice(query, req.user.cid, req.body)
      .then(dbRes => {
        if (dbRes.affectedRows <= 0) {
          res.status(400).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(() => res.status(400).end());
  };
module.exports = { handleGetDevices, handleCreateDevice, handleDeleteDevice };
