// @flow

import axios from "axios";
import { SET_SEARCH_TERM, ADD_API_DATA } from "./actions";

export function setSearchTerm(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function addAPIData(apiData: Show) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}

export function getAPIDetails(imdbID: string) {
  // this function that gets returned is a thunk
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        // once the call resolves, dispatch action that updates redux with the data
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error("axios error", error); // eslint-disable-line no-console
      });
  };
}
// response and error typings come from axios, so we don't have to type them
