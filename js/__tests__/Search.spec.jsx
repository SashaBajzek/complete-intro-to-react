import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

// test is run in node, so make sure this is added to babelrc
// "env": {
//   "test": {
//     "plugins": [
//       "babel-plugin-transform-es2015-modules-commonjs"
//     ]
//   }
// }

test("Search renders correctly", () => {
  const component = renderer.create(<Search />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
