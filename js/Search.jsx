// @flow

import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import ShowCard from "./ShowCard";

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show => (
          <ShowCard
            description={show.description}
            key={show.imdbID}
            imdbID={show.imdbID}
            poster={show.poster}
            title={show.title}
            year={show.year}
          />
        ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
