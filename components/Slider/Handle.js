import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledHandle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ percent }) => `${percent}%`};
  position: absolute;
  margin-top: -12px;
  margin-left: -12px;
  z-index: 2;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  opacity: ${({ disabled }) => disabled && "0.4"};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  transition: transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  :hover,
  :focus,
  :active {
    outline: none;
    transform: scale(1.02);
  }
`

StyledHandle.defaultProps = {
  theme: defaultTheme
}

const StyledHandleCircle = styled.div`
  flex-shrink: 0;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.orbit.paletteBlueNormal};
  top: 50%;
  left: 50%;
`

StyledHandleCircle.defaultProps = {
  theme: defaultTheme
}

const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps
}) => (
  <StyledHandle
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    percent={percent}
    disabled={disabled}
    {...getHandleProps(id)}
  >
    <StyledHandleCircle />
  </StyledHandle>
)

export default Handle
