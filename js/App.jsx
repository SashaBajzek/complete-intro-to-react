// @flow

import React from "react";
import { Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./Details";
import Landing from "./Landing";
import Search from "./Search";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/search"
            component={props => <Search shows={preload.shows} {...props} />}
          />
          <Route
            path="/details/:id"
            component={(props: { match: Match }) => (
              <Details
                show={preload.shows.find(
                  show => props.match.params.id === show.imdbID
                )}
                {...props}
              />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
);

export default App;
