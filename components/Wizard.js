import * as React from "react"
import styled from "styled-components"
import { defaultTheme } from "@kiwicom/orbit-components"

const StyledWizard = styled.nav`
  display: block;
  width: 100%;
  height: 76px;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
`
StyledWizard.defaultProps = {
  theme: defaultTheme
}

const Wizard = ({ active }) => (
  <StyledWizard>this is the wizard</StyledWizard>
)

export default Wizard
