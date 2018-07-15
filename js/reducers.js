import { CLEAR_SEARCH_TERM, SET_SEARCH_TERM } from "./actions";

const DEFAULT_STATE = {
  searchTerm: ""
};

// setSearchTerm is a reducer
// anything that takes in state and action and returns state is a reducer
const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const clearSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case CLEAR_SEARCH_TERM:
      return clearSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
