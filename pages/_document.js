import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

import Body from "../components/Body"

const basePath =
  process.env.NODE_ENV !== "production" ? "" : "/weekendfe"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(<App {...props} />)
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
          <title>JS Weekend</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            href={`${basePath}/static/favicon.ico`}
            type="image/x-icon"
          />
          <link
            rel="icon"
            href={`${basePath}/static/favicon.ico`}
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
          />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <Body>
          <Main />
          <NextScript />
          <div id="modals" />
        </Body>
      </html>
    )
  }
}
