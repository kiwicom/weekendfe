import styled, { css } from "styled-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"

const Mobile = styled.div`
  display: flex;
  ${mq.tablet(css`
    display: none;
  `)}
`

Mobile.defaultProps = {
  theme: defaultTheme
}

export default Mobile
