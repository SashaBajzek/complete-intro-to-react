import React from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends React.Component {
  state = {
    searchTerm: "this is some sort of debug statement"
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  }
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
          {preload.shows.map(show => (
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
