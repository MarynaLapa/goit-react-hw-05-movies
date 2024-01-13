import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LoadMore from './LoadMore'

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 32px;
    justify-content: center;

    li{
        flex-basis: 250px;
        text-align: center;
    }
    img {
        border-radius: 8px;
    }
`
const LinkDescription = styled(Link)`
    text-decoration: none;
    color: #434455;
    font-size: 16px;
    span {
        height: 48px;
        padding: 0 16px;
        font-weight: 500;
    }
    
`
export const MoviesList = ({ movies, isShowBtn, handlerLoadMore, handlerLoadMore1}) => {
    
    const location = useLocation()
 
    return (
        <>
            <List>
                {movies.map((movie, i) => 
                    <li key={movie.id+i}>
                        <LinkDescription to={`/movies/${movie.id}`} state={{ from: location }} >
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'} alt={movie.title} width={250} height={375} />
                            <span>{movie.title}</span>
                        </LinkDescription>
                    </li>
                )}
            </List>
            {isShowBtn && <LoadMore title={"попередня сторінка"} onClick={handlerLoadMore1} />}
            {isShowBtn && <LoadMore title={"наступна сторінка"}  onClick={handlerLoadMore} />}
        </>
  )
}
