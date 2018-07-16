// @flow

import moxios from "moxios";
import { setSearchTerm, addAPIData, getAPIDetails } from "../actionCreators";

const strangerThings = {
  title: "Stranger Things",
  year: "2016–",
  description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
  poster: "st.jpg",
  imdbID: "tt4574334",
  trailer: "9Egf5U8xLo8",
  rating: "8.6"
};

// test("setSearchTerm", () => {
//   expect(setSearchTerm("New York")).toEqual({
//     type: "SET_SEARCH_TERM",
//     payload: "New York"
//   });
// });

// Same test, but using snapshot:
// Using snapshot can make updating actionCreators easier since you just need to run test:update to remake the snapshot
test("setSearchTerm", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});

test("addAPIData", () => {
  expect(addAPIData(strangerThings)).toMatchSnapshot();
});

// Testing asynchronous code
// need to test addAPIData before testing the thunk (integration between the two)
test("getAPIDetails", (done: Function) => {
  // spy function: test later if it is called with correct parameters
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    // getAPIDetails returns another function
    // redux usually calls this function for us
    // so here we add the (dispatchMock) to call the function given back
    getAPIDetails(strangerThings.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: strangerThings
        })
        .then(() => {
          // test that correct api is being called
          expect(request.url).toEqual(
            `http://localhost:3000/${strangerThings.imdbID}`
          );
          // test that correct action is being dispatched
          expect(dispatchMock).toBeCalledWith(addAPIData(strangerThings));
          done();
        });
    });
  });
});
