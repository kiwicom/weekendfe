import styled, { css } from "styled-components"

const button = css`
  margin: 0;
  padding: 0;
  border: none;
  background: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const PickerRow = styled.button`
  ${button};
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  background: ${({ theme, selected }) =>
    selected
      ? theme.orbit.paletteCloudLightHover
      : theme.orbit.paletteWhite};
  cursor: pointer;
  box-shadow: 0 1px 0
    ${({ theme }) => theme.orbit.paletteCloudLightHover};

  &:hover {
    background: ${({ theme }) => theme.orbit.paletteCloudLightHover};
  }
`

export default PickerRow
