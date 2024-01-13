import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 32px;
  width: 1460px;
  margin: 0 auto;
`
const Container = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Container