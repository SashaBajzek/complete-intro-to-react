import React from "react";
import { shallow } from "enzyme";
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

test("Search should render correct amount of shows based on search term", () => {
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
