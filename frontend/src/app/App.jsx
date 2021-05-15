import Home from "../use-cases/home";
import { Route, Switch, Redirect } from "react-router";
import Header from "../common/components/header";

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
                <Route
                    path="/"
                    component={() => <div>404 Page not found</div>}
                />
            </Switch>
        </Header>
    );
};

export default App;
