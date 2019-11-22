import React, { useState } from "react"
import { graphql, QueryRenderer } from "@kiwicom/relay"
import { Loading } from "@kiwicom/orbit-components"

import { weekendapiEnvironment } from "../lib/enviroment"
import MapLoading from "../src/components/MapLoading"
import ErrorModal from "../src/components/ErrorModal"
import PlacesRoute from "../components/PlacesRoute"

const PlacesPage = ({ query }) => {
  const [cityIndex, setCityIndex] = useState(0)

  const [isVisibleShareModal, setVisibleShareModal] = useState(false)

  if (!query.bookingToken)
    return <Loading type="pageLoader" text="Loading results" />

  return (
    <QueryRenderer
      clientID="https://github.com/kiwicom/weekendfe"
      variables={{
        interest: query.interest,
        bookingToken: query.bookingToken
      }}
      query={graphql`
        query placesQuery(
          $interest: String!
          $bookingToken: String!
        ) {
          item(interest: $interest, bookingToken: $bookingToken) {
            ...PlacesRoute_item
          }
        }
      `}
      environment={weekendapiEnvironment}
      onLoading={() => <MapLoading text="Loading" />}
      onSystemError={() => <ErrorModal />}
      onResponse={({ item }) => (
        <PlacesRoute
          item={item}
          query={query}
          cityIndex={cityIndex}
          setCityIndex={setCityIndex}
          isVisibleShareModal={isVisibleShareModal}
          setVisibleShareModal={setVisibleShareModal}
        />
      )}
    />
  )
}

// enable passing query to main component
PlacesPage.getInitialProps = async ({ query }) => ({ query })

export default PlacesPage
