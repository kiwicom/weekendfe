import * as React from "react"
import { QueryRenderer, graphql } from "@kiwicom/relay"

// import AllLocations from "./AllLocations"
// import RefetchAllLocations from "./RefetchAllLocations"
import LocationsPaginated from "./LocationsPaginated"

const Locations = () => (
  <QueryRenderer
    clientID="https://graphql.kiwi.com"
    variables={{ count: 20 }}
    query={graphql`
      query LocationsQuery($count: Int!) {
        ...LocationsPaginated_data @arguments(count: $count)
      }
    `}
    onResponse={render => <LocationsPaginated data={render} />}
  />
)

export default Locations
