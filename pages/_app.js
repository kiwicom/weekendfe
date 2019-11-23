// @flow

import * as React from "react"
import App from "next/app"
import Head from "next/head"
import {
  // $FlowFixMe: Orbit is broken
  getTokens,
  Stack,
  ThemeProvider
} from "@kiwicom/orbit-components"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`

const Container = styled.div`
  max-width: 800px;
  padding-top: 80px;
  position: relative;
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
          <Stack justify="center" align="center">
            <Container>
              <Component {...pageProps} />
            </Container>
          </Stack>
        </>
      </ThemeProvider>
    )
  }
}

export default MyApp
