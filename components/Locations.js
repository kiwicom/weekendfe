import * as React from "react"
import { QueryRenderer } from "@kiwicom/relay"

// import AllLocations from "./AllLocations"
// import RefetchAllLocations from "./RefetchAllLocations"
import LocationsPaginated from "./LocationsPaginated"

const Locations = () => (
  <QueryRenderer
    clientID="https://graphql.kiwi.com"
    query={
      {
        /* TODO: write gql query */
      }
    }
    onResponse={render => <LocationsPaginated data={render} />}
  />
)

export default Locations
