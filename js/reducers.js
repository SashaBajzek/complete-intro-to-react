// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_TERM, ADD_API_DATA } from "./actions";

// this reducer only worries about the searchTerm part of the state
const searchTerm = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    // this is type refinement
    return action.payload; // because of refinement, flow knows this is a string
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    // same as:
    // const key = action.payload.imdbID
    // const obj: {}
    // obj[key] = action.payload
    return Object.assign({}, state, {
      [action.payload.imdbID]: action.payload
    });
  }
  return state;
};

// there is a piece of state called searchTerm and the reducer for it is called searchTerm, so {searchTerm: searchTerm}, but because of es6, can just write {searchTerm}
const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
