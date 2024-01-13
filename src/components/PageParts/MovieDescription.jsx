import React from 'react'
import Description from './Description'
import MovieTitle from './MovieTitle'
import Title from './Title'
import GenresList from './GenresList'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
` 
const TitleHidden = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`
const MovieDescription = ({ movie }) => {
  
    const { title, overview, genres, vote_average, poster_path } = movie

    return (
        <>
        <TitleHidden>Movie details</TitleHidden>
        <Wrapper>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} width={300}/>
            <div>
                <MovieTitle movieTitle={title}/>
                <Description>User score: {(vote_average*10).toFixed(2)}%</Description>
                <Title title={'Overview'}/>
                <Description>{overview}</Description>
                <Title title={'Genres'} />
                <GenresList genres={genres} />
            </div>
        </Wrapper>
        </>
    )
}

export default MovieDescription

// const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

// <img src={
//  movieData.poster_path ?
//  [<https://image.tmdb.org/t/p/w500/${movieData.poster_path}>](<https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D>)
//  : defaultImg
// }
// width={250}
// alt="poster"
// />