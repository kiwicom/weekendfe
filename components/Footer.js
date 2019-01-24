import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledFooter = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 24px;
  width: 100%;
  height: 90px;
  background: white;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -2px 8px rgba(23, 27, 30, 0.15);
`

StyledFooter.defaultProps = {
  theme: defaultTheme
}

const LeftActions = styled.div`
  display: flex;
  justify-content: flex-start;

  > * {
    margin-right: 16px;
    :last-child {
      margin: 0;
    }
  }
`

const RightActions = styled(LeftActions)`
  justify-content: flex-end;
`

const Footer = ({ leftActions, rightActions }) => (
  <StyledFooter>
    <LeftActions>{leftActions}</LeftActions>
    <RightActions>{rightActions}</RightActions>
  </StyledFooter>
)

export default Footer
