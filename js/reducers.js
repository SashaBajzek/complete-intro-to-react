// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_TERM } from "./actions";

// this reducer only worries about the searchTerm part of the state
const searchTerm = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

// there is a piece of state called searchTerm and the reducer for it is called searchTerm, so {searchTerm: searchTerm}, but because of es6, can just write {searchTerm}
const rootReducer = combineReducers({ searchTerm });

export default rootReducer;
