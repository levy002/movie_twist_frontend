import React from 'react';
import styled from 'styled-components';

const Movie = ({ name, image, rating, runtime, year }) => {
  return (
    <MovieSection>
      <ImageContainer>
        <MovieImage src={image} alt={name} />
      </ImageContainer>
      {
        rating !== null ? <MovieRating>{rating}</MovieRating> : null
      }

      <MovieTimeYearContainer>
        {year ? <MovieYear>{year.slice(0, 4)}</MovieYear> : <MovieYear>2014</MovieYear>}
        <MovieRuntime>{runtime} min</MovieRuntime>
      </MovieTimeYearContainer>
      <MovieName>{name}</MovieName>
    </MovieSection>
  )
};

const MovieSection = styled.section`
position: relative;
width: 45%;
margin-bottom: 10px;
@media (min-width: 768px) {
    width: 30%;
    margin-bottom: 15px;
  };
  @media (min-width: 1000px) {
    width: 20%;
    margin-bottom: 15px;
  }
  @media (min-width: 1280px) {
    width: 15%;
    margin-bottom: 20px;
  }
`

const MovieName = styled.h4`
color: #fff;
font-size: 0.9rem;
margin: 0;
@media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const ImageContainer = styled.div`
width: 100%;
height: 240px;
@media (min-width: 768px) {
    height: 280px;
  }
`

const MovieImage = styled.img`
border-radius: 10px;
width: 100%;
height: 100%;
@media (min-width: 768px) {
    height: 100%;
  }
`

const MovieRating = styled.p`
background-color: rgba(55,149,211,0.8);
color: #fff;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 25px;
height: 25px;
font-size: 0.8rem;
position: absolute;
top: -3%;
left: 80%;
@media (min-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
    left: 82%;
  }
`

const MovieRuntime = styled.p`
color: #fff;
opacity: 0.7;
font-size: 0.8rem;
margin: 0;
@media (min-width: 768px) {
    font-size: 0.9rem;
  }
`

const MovieYear = styled.p`
color: #fff;
opacity: 0.7;
font-size: 0.8rem;
margin: 0;
@media (min-width: 768px) {
    font-size: 0.9rem;
  }
`
const MovieTimeYearContainer = styled.div`
display: flex;
justify-content: space-between;
height: 30px;
margin-top: 10px;
`
export default Movie;
