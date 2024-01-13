import React from 'react'
import styled from 'styled-components'

const DescriptionStyled = styled.p`
    margin-bottom: 24px;
    max-width: 600px;
    font-size: 18px;
`
const Description = ({ children }) => {
    
  return (
      <DescriptionStyled>
          {children}
      </DescriptionStyled>
  )
}

export default Description