import * as React from "react"
import App, { Container } from "next/app"
import { ApolloProvider } from "react-apollo"
import { getTokens, defaultTheme } from "@kiwicom/orbit-components"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import withApolloClient from "../lib/with-apollo-client"

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
const foundation = {
  palette: {
    product: {
      light: "black",
      lightHover: "#bde9e2",
      lightActive: "#9addd3",
      normal: "#00a991",
      normalHover: "#009882",
      normalActive: "#008f7b",
      dark: "#00826f"
    }
  },
  base: {
    fontFamily: "'Source Sans Pro', sans-serif",
    borderRadius: "7px",
    fontWeightMedium: "600"
  }
}

const tokens = getTokens(foundation)

// TODO: overwrite necessary tokens
const customTokens = tokens

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ThemeProvider theme={{ orbit: customTokens }}>
          <>
            <GlobalStyle />
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
