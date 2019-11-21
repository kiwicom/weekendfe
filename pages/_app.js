import * as React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import { getTokens, ThemeProvider } from "@kiwicom/orbit-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={{ orbit: getTokens() }}>
        <>
          <Head>
            <title>JS Weekend</title>
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}

export default MyApp
