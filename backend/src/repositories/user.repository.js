const { toPromise } = require("./common");

const getUserDevices = (query, cid) =>
  toPromise(
    query,
    "SELECT device_name, address FROM mac_addresses WHERE user_id=?",
    [cid],
  );

module.exports = { getUserDevices };
