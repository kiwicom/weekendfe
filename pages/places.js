import * as React from "react"

import Places from "../src/components/Places"

const PlacesPage = ({ query }) => <Places query={query} />

// enable passing query to main component
PlacesPage.getInitialProps = async ({ query }) => ({ query })

export default PlacesPage
