import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

// tagged template literal, returns a styled div
const Wrapper = styled.div`
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  overflow: hidden;
  padding-right: 10px;
  width: 32%;
`;

const Image = styled.img`
  float: left;
  margin-right: 10px;
  width: 46%;
`;

const ShowCard = props => (
  <Wrapper>
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

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;