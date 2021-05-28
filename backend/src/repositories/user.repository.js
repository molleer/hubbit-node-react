const { toPromise } = require("./common");

const getUserDevices = (query, cid) =>
  toPromise(
    query,
    "SELECT device_name, address FROM mac_addresses WHERE user_id=?",
    [cid],
  );

const createUserDevice = (query, cid, { device_name, address }) =>
  toPromise(
    query,
    "INSERT INTO mac_addresses" +
      "(address, user_id, created_at, updated_at, device_name)" +
      "VALUES (?,?,NOW(),NOW(),?)",
    [address, cid, device_name],
  );

const deleteUserDevice = (query, cid, { address }) =>
  toPromise(query, "DELETE FROM mac_addresses WHERE user_id=? AND address=?", [
    cid,
    address,
  ]);

module.exports = { getUserDevices, createUserDevice, deleteUserDevice };
