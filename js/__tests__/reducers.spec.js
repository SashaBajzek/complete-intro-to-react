import reducers from "../reducers";

// copy and paste tests from redux devtools
// for example, copy and pasting the term black and outputing the test gives:
// test("reducers", () => {
//   const state = reducers(
//     { searchTerm: "", apiData: {} },
//     { type: "SET_SEARCH_TERM", payload: "black" }
//   );
//   expect(state).toEqual({ searchTerm: "black", apiData: {} });
// });

// if you want to test just one thing at a time, refresh before causing that single action to dispatch
// otherwise, if you want to test multiple things, like having two api calls from two shows, go to one show, then the other, then get the test from the last action

test("SET_SEARCH_TERM", () => {
  const state = reducers(
    { searchTerm: "", apiData: {} },
    { type: "SET_SEARCH_TERM", payload: "black" }
  );
  expect(state).toEqual({ searchTerm: "black", apiData: {} });
});

test("ADD_API_DATA", () => {
  const state = reducers(
    { searchTerm: "", apiData: {} },
    {
      type: "ADD_API_DATA",
      payload: {
        rating: "0.4",
        title: "Westworld",
        year: "2016–",
        description: "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
        poster: "ww.jpg",
        imdbID: "tt0475784",
        trailer: "eX3u0IlBBO4"
      }
    }
  );
  expect(state).toEqual({
    searchTerm: "",
    apiData: {
      tt0475784: {
        rating: "0.4",
        title: "Westworld",
        year: "2016–",
        description: "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
        poster: "ww.jpg",
        imdbID: "tt0475784",
        trailer: "eX3u0IlBBO4"
      }
    }
  });
});

test("ADD_API_DATA with two shows", () => {
  const state = reducers(
    {
      searchTerm: "",
      apiData: {
        tt0944947: {
          rating: "3.4",
          title: "Game of Thrones",
          year: "2011–",
          description: "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",
          poster: "got.jpg",
          imdbID: "tt0944947",
          trailer: "giYeaKsXnsI"
        }
      }
    },
    {
      type: "ADD_API_DATA",
      payload: {
        rating: "0.4",
        title: "Westworld",
        year: "2016–",
        description: "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
        poster: "ww.jpg",
        imdbID: "tt0475784",
        trailer: "eX3u0IlBBO4"
      }
    }
  );
  expect(state).toEqual({
    searchTerm: "",
    apiData: {
      tt0944947: {
        rating: "3.4",
        title: "Game of Thrones",
        year: "2011–",
        description: "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",
        poster: "got.jpg",
        imdbID: "tt0944947",
        trailer: "giYeaKsXnsI"
      },
      tt0475784: {
        rating: "0.4",
        title: "Westworld",
        year: "2016–",
        description: "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
        poster: "ww.jpg",
        imdbID: "tt0475784",
        trailer: "eX3u0IlBBO4"
      }
    }
  });
});
