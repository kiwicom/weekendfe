import * as React from "react"
import styled, { css } from "styled-components"
import { defaultTheme } from "@kiwicom/orbit-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"

const StyledContentWrapper = styled.main`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.orbit.spaceXXXLarge} ${theme.orbit.spaceMedium}`};

  ${mq.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceXXXLarge};
  `)}
`

const StyledContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

StyledContentContainer.defaultProps = {
  theme: defaultTheme
}

const ContentContainer = ({ children }) => (
  <StyledContentWrapper>
    <StyledContentContainer>{children}</StyledContentContainer>
  </StyledContentWrapper>
)

export default ContentContainer
