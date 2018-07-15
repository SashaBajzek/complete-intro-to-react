// @flow

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// if typeof window === "object", aka if in the browser, so it will still run in node for ssr
// function that returns nothing aka identity function f => f
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
