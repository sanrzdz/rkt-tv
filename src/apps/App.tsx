import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home_view";
import Detail from "../pages/detail/Detail_view";
import HomeModel from "../pages/home/Home_model";
import DetailModel from "../pages/detail/Detail_model";
import Player from "../pages/player/Player_view";
import PlayerModel from "../pages/player/Player_model";
// import "../assets/sass/main.scss";

import { IRakutenApi } from "../services/rakuten.api";
const App: React.FunctionComponent<{ provider: IRakutenApi }> = ({ provider }) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Home model={new HomeModel(provider)} />} />
                    <Route path="/movies/:id/" exact render={(props) => <Detail model={new DetailModel(props, provider)} />} />
                    <Route path="/streams/movie/:id/" exact render={(props) => <Player model={new PlayerModel(props)} />} />
                    <Route path="*" render={(props) => <>Page not found</>} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
