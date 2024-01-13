import styled from "styled-components"

const List = styled.ul`
    div {
        display: flex;
        gap: 4px;
        align-items: center;
    }
    
    li {
        background-color: #f8ecd7;
        border-radius: 4px;
        padding: 4px 8px;
        border: 1px solid rgba(240, 212, 159, 0.863);
        box-shadow:  0 4px 12px  rgba(240, 212, 159, 0.3), 0 4px 12px  rgba(240, 212, 159, 0.3);
    } 

    li:not(:last-of-type) {
        margin-bottom: 20px;
    }

`
const ReviewsList = ({ reviews }) => {
    
  return (
      <List>
        {reviews.map(person =>
            <li key={person.id}>
                <div>
                    <h3>Author:</h3>
                    <p>{person.author}</p>
                </div>
             
                
                    <h3>Reviews:</h3>
                    <p>{person.content}</p>
               
            </li>
        )}
      </List>
  )
}

export default ReviewsList 