import Home from "../use-cases/home";
import { Route, Switch, Redirect } from "react-router";
import Header from "../common/components/header";
import Callback from "../use-cases/callback";
import Me from "../use-cases/me";

const App = () => {
    return (
        <Header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/sessions"
                    component={() => <Redirect to="/" />}
                />
                <Route path="/me" component={Me} />
                <Route path="/callback" component={Callback} />
                <Route
                    path="/error"
                    component={() => <div>An error has occurred</div>}
                />
                <Route
                    path="/"
                    component={() => <div>404 Page not found</div>}
                />
            </Switch>
        </Header>
    );
};

export default App;
