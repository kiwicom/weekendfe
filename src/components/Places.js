import * as React from "react"
import { graphql, QueryRenderer } from "@adeira/relay"

import { weekendapiEnvironment } from "../services/enviroment"
import MapLoading from "./MapLoading"
import ErrorModal from "./ErrorModal"
import PlacesRoute from "./PlacesRoute"

const Places = ({ query }) => {
  const [cityIndex, setCityIndex] = React.useState(0)
  const [isVisibleShareModal, setVisibleShareModal] = React.useState(
    false
  )

  return (
    <QueryRenderer
      clientID="https://github.com/kiwicom/weekendfe"
      variables={{
        interest: query.interest,
        bookingToken: query.bookingToken
      }}
      query={graphql`
        query PlacesQuery(
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

export default Places
