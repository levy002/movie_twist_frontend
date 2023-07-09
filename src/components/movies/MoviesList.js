import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';


const MoviesList = ({ movies }) => {
  return (
    <MovieContainer>
      {
        movies.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          <>
            {
              movies.map((movie) => (
                <Movie name={movie.name} image={movie.image} rating={movie.rating} runtime={movie.runtime} year={movie.year} key={movie.id} />
              ))
            }
          </>
        )
      }
    </MovieContainer>
  )
}

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  width: 95%;
  margin: 0 auto;
`

export default MoviesList;
