import styled from 'styled-components'

const GenresListStyled = styled.ul`
  display: flex;
  gap: 12px;
  font-size: 18px;
`

const GenresList = ({ genres }) => {
  
  return (
    <GenresListStyled>
      {genres.map(genre =>
        <li key={genre.id}>
          {genre.name}
        </li>
      )}
    </GenresListStyled>
  )
}

export default GenresList