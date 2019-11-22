import * as React from "react"

import Result from "../src/components/Result"

const ResultPage = ({ query }) => <Result query={query} />

// enable passing query to main component
ResultPage.getInitialProps = async ({ query }) => ({ query })

export default ResultPage
