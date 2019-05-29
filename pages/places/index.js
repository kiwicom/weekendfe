import { useState } from "react"
import { graphql, QueryRenderer } from "@kiwicom/relay"

import { weekendapiEnvironment } from "../../lib/enviroment"
import MapLoading from "../../components/MapLoading"
import ErrorModal from "../../components/ErrorModal"
import Respond from "./components/Respond"

const PlacesPage = ({ query }) => {
  const [cityIndex, setCityIndex] = useState(0)

  const [isVisibleShareModal, setVisibleShareModal] = useState(false)

  return (
    <QueryRenderer
      clientID="https://github.com/kiwicom/weekendfe"
      query={graphql`
        query placesQuery(
          $interest: String!
          $bookingToken: String!
        ) {
          item(interest: $interest, bookingToken: $bookingToken) {
            route {
              ...Respond_route
            }
          }
        }
      `}
      variables={{
        interest: query.interest,
        bookingToken: query.bookingToken
      }}
      environment={weekendapiEnvironment}
      onLoading={() => <MapLoading text="Loading" />}
      onSystemError={() => <ErrorModal />}
      onResponse={rendererProps => (
        <Respond
          route={rendererProps.route}
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
