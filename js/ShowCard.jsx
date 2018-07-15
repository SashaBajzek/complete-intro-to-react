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

const ShowCard = (props: {
  description: string,
  imdbID: string,
  poster: string,
  title: string,
  year: string
}) => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
