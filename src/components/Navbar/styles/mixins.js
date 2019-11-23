import { css } from "styled-components"

// eslint-disable-next-line import/prefer-default-export
export const popup = css`
  z-index: 1000;
  position: absolute;
  left: 0;
  right: 0;
  top: 65px;
  margin: 12px;
  border: 0;
  box-shadow: 0 6px 16px 0 rgba(45, 53, 59, 0.22),
    0 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  overflow: hidden;
  width: 95%;
  min-width: 230px;
  box-sizing: border-box;
  padding: 20px;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  user-select: none;
  min-height: 100px;
`
