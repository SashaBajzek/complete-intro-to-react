// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string // only have rating data when it comes back from api
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = "SET_SEARCH_TERM" | "ADD_API_DATA";

// A and P generic types
// <> are parameters for flow
declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action =
  | ActionT<"SET_SEARCH_TERM", string>
  | ActionT<"ADD_API_DATA", Show>;
