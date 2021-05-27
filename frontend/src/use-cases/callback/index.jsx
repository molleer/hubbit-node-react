import axios from "axios";
import { Redirect } from "react-router";
import { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../common/contexts";

const Callback = () => {
    const history = useHistory();
    const [, setUser] = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    useEffect(() => {
        axios
            .get(`/api/callback${history.location.search}`)
            .then(() => {
                setUser({ is_logged_in: true });
                setRedirect("/");
            })
            .catch(() => setRedirect("/error"));
    }, [history.location.search, setUser]);

    return <>{redirect ? <Redirect to={redirect} /> : null}</>;
};

export default Callback;
