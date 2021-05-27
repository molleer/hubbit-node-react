const { createContext } = require("react");

const UserContext = createContext([() => {}, { is_logged_in: false }]);
export default UserContext;
