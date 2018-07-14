// @flow

import React from "react";
import { render } from "react-dom";
import App from "./App";

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
