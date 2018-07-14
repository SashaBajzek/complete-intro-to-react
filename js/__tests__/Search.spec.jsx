import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";

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

test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
