import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledTrack = styled(({ target, source, theme, ...props }) => <div {...props} />)`
  position: absolute;
  height: 2px;
  z-index: 1;
  background-color: ${({ theme }) => theme.orbit.paletteBlueNormal};
  border-radius: 2px;
  cursor: pointer;
  left: ${({ source }) => `${source.percent}%`};
  width: ${({ source, target }) => `${target.percent - source.percent}%`};
`

StyledTrack.defaultProps = {
  theme: defaultTheme
}

const Track = ({ source, target, getTrackProps, disabled }) => (
  <StyledTrack disabled={disabled} source={source} target={target} {...getTrackProps()} />
)

export default Track
