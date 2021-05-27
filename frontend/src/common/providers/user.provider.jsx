import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ is_logged_in: false });
    const history = useHistory();
    useEffect(() => {
        if (["/callback", "/error"].includes(history.location.pathname)) return;
        axios
            .get("/api/checkLogin")
            .then(() => setUser({ is_logged_in: true }))
            .catch(err => {
                if (
                    err.response &&
                    err.response.data &&
                    err.response.data.match(/^http/)
                ) {
                    window.location.href = err.response.data;
                    return;
                }
                window.location.href = "/error";
            });
    }, [history.location.pathname]);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
