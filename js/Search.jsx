import React from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = event => {
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
          {preload.shows
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
