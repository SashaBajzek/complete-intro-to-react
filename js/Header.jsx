// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange?: Function,
  searchTerm?: string
}) => {
  let utilSpace;
  // Header is a functional component, so it's not this.props, it's just props
  // Typing it out explicitly instead of using terinaries
  if (props.showSearch) {
    utilSpace = (
      <input
        value={props.searchTerm}
        type="text"
        placeholder="Search"
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = <h2><Link to="/search">Back</Link></h2>;
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

// since showSearch? props are optional, need to provide default props
Header.defaultProps = {
  showSearch: false, // if they don't ask for search, assume they don't want it
  handleSearchTermChange: function noop() {},
  searchTerm: ""
};

export default Header;
