import { Link } from "react-router-dom"
import styled from "styled-components";
import { ReactComponent as Arrow } from 'components/icon/arrow.svg'

const ArrowStyled = styled(Arrow)`
  fill: rgba(218, 142, 2, 0.863);
  width: 24px;
  height: 24px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: rgba(225, 168, 63, 0.863);
  }
`
const GoBack = styled(Link)`
  display: flex;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: rgb(34, 15, 15);
  margin-bottom: 20px;
  border: 1px solid rgba(218, 142, 2, 0.863);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100px; 
  text-decoration: none;

  span {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
    color: rgba(218, 142, 2, 0.863);
    cursor: pointer;
    font-family: inherit;
    opacity: 1;
    // &:hover,
    // &:focus {
    //   color: rgba(225, 168, 63, 0.863);
    // }
  }
  
  &:hover,
  &:focus {
    opacity: 0.6;
    border: 1px solid white;
  }
`
  
const Button = ({ to }) => {

  return (
      <GoBack to={to}>
        <ArrowStyled />
        <span>Go back</span>
      </GoBack>
  )
}

export default Button