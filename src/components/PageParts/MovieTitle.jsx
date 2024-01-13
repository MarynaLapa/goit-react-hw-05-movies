import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    margin-bottom: 24px;
    color: rgba(218, 142, 2, 0.863);
    font-size: 40px;
    letter-spacing: 1.2;
    font-family: 'Lemon';
`

const MovieTitle = ({movieTitle}) => {
  return (
      <Title>{movieTitle}</Title>
  )
}

export default MovieTitle