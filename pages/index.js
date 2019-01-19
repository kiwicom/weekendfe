import gql from "graphql-tag"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Illustration from "@kiwicom/orbit-components/lib/Illustration"

import Query from "../components/query"
import czechCountryQuery from "../queries/country.gql"

export const continentsQuery = gql`
  query {
    continents {
      name
    }
  }
`

export default () => (
  <>
    <Alert type="success">Hello, Welcome to JS WEEKEND!</Alert>
    <Illustration
      size="medium"
      name="Accommodation"
      dataTest="test"
      spaceAfter={null}
    />
    <br />
    {"this time in "}
    <Query
      query={czechCountryQuery}
      variables={{ code: "CZ" }}
      context={{ uri: "https://countries.trevorblades.com/" }}
    >
      {({ data }) => (
        <b>
          {data.country.emoji} {data.country.name}
        </b>
      )}
    </Query>
    <Query
      query={continentsQuery}
      context={{ uri: "https://countries.trevorblades.com/" }}
    />
  </>
)
