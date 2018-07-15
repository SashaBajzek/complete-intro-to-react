// @flow

import React from "react";
import ShowCard from "./ShowCard";

class Search extends React.Component {
  // state is a variable on the Search class
  state = {
    searchTerm: ""
  };
  // props is different than state, it's just for typing
  props: {
    shows: Array<Show> // show is in types.js
  };
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard
                description={show.description}
                key={show.imdbID}
                poster={show.poster}
                title={show.title}
                year={show.year}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
