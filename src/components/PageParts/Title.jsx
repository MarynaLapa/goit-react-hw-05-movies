import React from 'react'
import styled from 'styled-components'

const MiddleTitle = styled.h3`
    margin-bottom: 24px;
    font-size: 24px;
    
`
const Title = ({title}) => {
  return (
      <MiddleTitle>
          {title}
      </MiddleTitle>
  )
}

export default Title