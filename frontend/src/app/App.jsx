import Home from "../use-cases/home";
import { Route, Switch } from "react-router";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={() => <div>404 Page not found</div>} />
        </Switch>
    );
};

export default App;
