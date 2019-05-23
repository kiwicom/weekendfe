import * as React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import {
  getTokens,
  defaultTheme,
  ThemeProvider
} from "@kiwicom/orbit-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`

GlobalStyle.defaultProps = {
  theme: defaultTheme
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>JS Weekend</title>
        </Head>
        <ThemeProvider theme={{ orbit: getTokens() }}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
