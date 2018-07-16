import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import { setSearchTerm } from "../actionCreators";
import preload from "../../data.json";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import ShowCard from "../ShowCard";

// test is run in node, so make sure this is added to babelrc
// "env": {
//   "test": {
//     "plugins": [
//       "babel-plugin-transform-es2015-modules-commonjs"
//     ]
//   }
// }

// console.log(process.env.NODE_ENV);
// outputs "test"

// if there are any tests I don't want to run, put an x in front to skip it.  xdescribe, xit, xtest

test("Search renders correctly", () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  // enzyme can find a component based on the react component, ShowCard
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Search should render correct amount of shows based on search term - without Redux", () => {
  const searchWord = "black";
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
  );
  // enzyme can also find a component based on css selectors, such as input
  // component
  //   .find("input")
  //   .simulate("change", { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});

// the test with Redux requires intimate knowledge of the component, so it may not be as good of a test as the preview version of this test without Redux
test("Search should render correct amount of shows based on search term - with Redux", () => {
  const searchWord = "black";
  store.dispatch(setSearchTerm(searchWord));
  // render can make tests very slow
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>
  );
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  // need to use the class to find ShowCard
  expect(component.find(".show-card").length).toEqual(showCount);
});
