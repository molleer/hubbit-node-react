const {
  getUserDevices,
  getUserDevice,
  createUserDevice,
  deleteUserDevice,
} = require("../repositories/user.repository");

const handleGetDevices =
  ({ query }) =>
  (req, res) => {
    if (!req.query.address)
      getUserDevices(query, req.user.cid)
        .then(data => res.json(data))
        .catch(err => {
          console.log(err);
          res.sendStatus(500);
        });
    else
      getUserDevice(query, req.user.cid, req.query)
        .then(data => res.json(data[0]))
        .catch(() => res.status(400).end());
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
    deleteUserDevice(query, req.user.cid, req.params)
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
