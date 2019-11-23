// @flow

import * as React from "react"
import styled from "styled-components"

const StyledBody = styled.body`
  width: 100vw;
  height: 100vh;
  margin: 0;
`

type Props = {|
  children: React.Node
|}

const Body = ({ children }: Props) => (
  <StyledBody>{children}</StyledBody>
)

export default Body
