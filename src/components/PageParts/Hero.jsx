import React from 'react'
import styled from 'styled-components'
import image from '../img/img.png';

const SectionStyled = styled.section`
    width: 1524px;
    height: 560px;
    padding-top: 40px;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 400px;
    margin: 0 auto;
`

const Hero = ({children}) => {
  return (
    <SectionStyled>
        { children }
    </SectionStyled>
  )
}

export default Hero