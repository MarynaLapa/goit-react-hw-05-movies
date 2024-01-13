import styled from "styled-components"

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 48px;
  min-height: 48px;
  border: 2px solid rgba(218, 142, 2, 0.863);
  border-radius: 8px;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: rgb(34, 15, 15);
  color: rgba(218, 142, 2, 0.863);
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  margin: 20px auto 20px;

  &:hover,
  &focus {
    opacity: 0.6;
    border: 1px solid white;
  }
`
const LoadMore = ({ title, onClick }) => {
  return (
    <Button type="button" onClick={onClick} >{title}</Button>
  )
}

export default LoadMore