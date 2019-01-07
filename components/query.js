import { Query } from "react-apollo"
import gql from "graphql-tag"

import Debug from "./debug"
import czechCountryQuery from "./country.gql"

export const continentsQuery = gql`
  query {
    continents {
      name
    }
  }
`

export default () => (
  <>
    <Query query={continentsQuery}>
      {({ loading, error, data: { continents } }) => {
        if (error) return <div>error</div>
        if (loading) return <div>Loading</div>
        return <Debug continents={continents} />
      }}
    </Query>
    <Query query={czechCountryQuery}>
      {({ loading, error, data: { country } }) => {
        if (error) return <div>error</div>
        if (loading) return <div>Loading</div>
        return <Debug {...country} />
      }}
    </Query>
  </>
)
