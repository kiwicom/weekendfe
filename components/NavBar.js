import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledNavBar = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 24px;
  width: 100%;
  height: 90px;
  background: white;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 8px rgba(23, 27, 30, 0.15);
`

StyledNavBar.defaultProps = {
  theme: defaultTheme
}

const NavBar = ({ children }) => (
  <StyledNavBar>{children}</StyledNavBar>
)

export default NavBar
