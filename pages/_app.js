import * as React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import { getTokens, ThemeProvider } from "@kiwicom/orbit-components"

// we need to reset some global styles
// width, height, margin and background-color - cloudLight

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
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
