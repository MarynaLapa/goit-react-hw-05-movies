import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'

const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 24px;
    &.active {
        color: rgba(218, 142, 2, 0.863);
    }
`
const NavList = styled.nav`
    padding: 16px 0;
    ul {
        list-style: none;
        display: inline-flex;
        gap: 12px;
        padding-left: 0;
    }
`
const HeaderLine = styled.header`
    border-bottom: 2px solid orange; 
    box-shadow: 0 1px 2px 3px rgba(255, 165, 0, 0.3);
`
export const Header = () => {
    return (
        <HeaderLine>
            <Container>
                <NavList>
                    <ul>
                        <li><StyledLink to='/'>Home</StyledLink></li>
                        <li><StyledLink to='/movies'>Movies</StyledLink></li>    
                    </ul>
                </NavList>
            </Container>
        </HeaderLine>     
  )
}
