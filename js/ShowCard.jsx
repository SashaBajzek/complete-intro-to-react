// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// tagged template literal, returns a styled div
const Wrapper = styled((Link: any))`
  border: 2px solid #333;
  border-radius: 4px;
  color: black;
  margin-bottom: 25px;
  overflow: hidden;
  padding-right: 10px;
  text-decoration: none;
  width: 32%;
`;

const Image = styled.img`
  float: left;
  margin-right: 10px;
  width: 46%;
`;

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    // This is a very big hammer, only use this when it is absolutely needed
    // Once this component has rendered for first time, never rerender since it will never change
    // If state is added later, need to remove this shouldComponentUpdate or it won't update when state updates
    return false;
  }
  // for example, it an api call to check the rating is added, do this:
  // shouldComponentUpdate(nextProps) {
  //   return this.props.rating !== nextProps.rating;
  // }

  props: {
    description: string,
    imdbID: string,
    poster: string,
    title: string,
    year: string
  };
  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} Show Poster`}
          src={`/public/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
