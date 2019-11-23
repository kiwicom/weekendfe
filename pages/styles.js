import * as React from "react"
import { createGlobalStyle } from "styled-components"

import Navbar from "../src/components/Navbar"

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`

const SomePage = () => (
  <>
    <GlobalStyle />
    <Navbar />
  </>
)

export default SomePage
