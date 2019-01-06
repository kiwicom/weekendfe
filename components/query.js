import { Query } from "react-apollo"
import gql from "graphql-tag"

import Debug from "./debug"

export const continentsQuery = gql`
  query {
    continents {
      name
    }
  }
`

export default () => (
  <Query query={continentsQuery}>
    {({ loading, error, data: { continents }, fetchMore }) => {
      if (error) return <div>error</div>
      if (loading) return <div>Loading</div>
      return <Debug continents={continents} />
    }}
  </Query>
)
