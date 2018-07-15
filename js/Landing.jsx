// @flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import type { RouterHistory } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

class Landing extends React.Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    clearSearchTerm: Function,
    history: RouterHistory
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault(); // prevent form from submitting
    // because Landing is a route, it has access to history from react-router
    this.props.history.push("/search");
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search" onClick={this.props.clearSearchTerm}>
          or Browse All
        </Link>
      </div>
    );
  }
}

// use () to wrap the object, otherwise just {} looks like a js block of code to the arrow function
const mapStateToProps = state => ({ searchTerm: state.searchTerm });
// searchTerm can now be called on props
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  clearSearchTerm() {
    dispatch(setSearchTerm(""));
  }
});

// connect(mapStateToProps) returns a function which is then called with (Landing) to return a component
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
