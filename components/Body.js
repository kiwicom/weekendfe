import * as React from "react"
import styled from "styled-components"
import { defaultTheme } from "@kiwicom/orbit-components"

const StyledBody = styled.body`
  width: 100vw;
  height: 100vh;
  margin: 0;
`

StyledBody.defaultProps = {
  theme: defaultTheme
}

const Body = ({ children }) => <StyledBody>{children}</StyledBody>

export default Body
