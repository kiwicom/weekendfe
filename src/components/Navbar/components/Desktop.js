import styled, { css } from "styled-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"

const Desktop = styled.div`
  display: none;
  ${mq.tablet(css`
    display: flex;
  `)}
`

Desktop.defaultProps = {
  theme: defaultTheme
}

export default Desktop
