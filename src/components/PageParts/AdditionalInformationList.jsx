// import { Link, useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import styled from "styled-components"

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
const List = styled.ul`
  display: flex;
  gap: 12px;
  border-bottom: 4px solid rgba(240, 212, 159);
  border-top: 4px solid rgba(240, 212, 159);
  margin-bottom: 40px;
  li {
    padding: 12px 12px;
  }
`
const LinkText = styled(Link)`
  text-decoration: none;
  color: #434455;
  font-size: 24px;
  font-weight: 500;

  &:hover, 
  &focus {
    color: rgba(218, 142, 2, 0.863);
  }
`
const AdditionalInformationList = () => {
    // const location = useLocation()
  return (
    <>
      <TitleHidden>Additional information:</TitleHidden>
      <List>
            <li>
                {/* <Link to='cast' state={location}>Cast</Link> */}
                <LinkText to='cast'>Cast</LinkText>
                
            </li>
            <li>
                {/* <Link to='reviews' state={location}>Reviews</Link> */}
                <LinkText to='reviews'>Reviews</LinkText>
                
            </li>
        </List> 
    </>
     
  )
}

export default AdditionalInformationList