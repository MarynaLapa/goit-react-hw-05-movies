import React from 'react'
import styled from 'styled-components'
// import { Title } from './PageTitle.styled'


const Title = styled.h1`
    font-size: 54px;
    color: rgba(218, 142, 2, 0.863);
    padding-left: 16px;
    font-family: 'Lemon'; //"#BF4F74"
    margin-bottom: 24px;
`
const PageTitle = ({title}) => {
  return (
      <Title>
        {title}
      </Title>    
  )
}

export default PageTitle