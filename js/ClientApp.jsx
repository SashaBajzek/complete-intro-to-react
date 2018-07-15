// @flow

import React from "react";
import { render } from "react-dom";
import Perf from "react-addons-perf";
import App from "./App";

window.Perf = Perf;
Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};

renderApp();

// only enabled in dev, not production
// module is from webpack
// this is just needed for top level component
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
