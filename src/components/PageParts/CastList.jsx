import styled from "styled-components"

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 40px;
    justify-content: space-evenly;

    li {
        background-color: #f8ecd7;
        flex-basis: 200px;
        border: 1px solid rgba(240, 212, 159, 0.863);
        border-radius: 4px;
        box-shadow:  0 4px 12px  rgba(240, 212, 159, 0.3), 0 4px 12px  rgba(240, 212, 159, 0.3);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        border-top-left-radius: 80px;
        border-bottom-right-radius: 80px;
    }

    li:hover{
        transform: scale(1.05);
    }

    img {
        margin-bottom: 8px;
        margin-bottom: 8px;
        border-top-left-radius: 80px;
    }

    h3 {
        text-align: center;
        font-weight: 500;
        padding: 0 8px;
        margin-bottom: 8px;
        height: 60px;
        font-size: 20px;
    }

    p {
        width: 144px;
        padding: 0 8px;
        font-weight: 500;
    }

    span {
        font-size: 16px;
        font-weight: 400;
    }

`

const CastList = ({ cast }) => {
  return (
    <List>
          {cast.map(actor =>
            <li key={actor.cast_id}>
                <img
                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
                    alt={actor.name}
                    width={200}
                      height={300}
                />
                <h3>{actor.name}</h3>
                <p>
                    Character: <br />
                    <span>{actor.character}</span>
                </p>
            </li>
        )}
    </List>
  )
}

export default CastList

