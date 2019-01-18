import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

import Body from "../components/Body"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    }
  }

  render() {
    return (
      <html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700"
            rel="stylesheet"
          />
          <link href="https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css" rel="stylesheet" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    )
  }
}
