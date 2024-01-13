import React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
    padding: 40px 0;
`

const Section = ({children}) => {
  return (
    <SectionStyled>
        { children }
    </SectionStyled>
  )
}

export default Section