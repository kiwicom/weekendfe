import * as React from "react"
import styled from "styled-components"

const StyledBody = styled.body`
  width: 100vw;
  height: 100vh;
  margin: 0;
`

const Body = ({ children }) => <StyledBody>{children}</StyledBody>

export default Body
