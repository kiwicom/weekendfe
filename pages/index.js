import gql from "graphql-tag"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Illustration from "@kiwicom/orbit-components/lib/Illustration"
import TextLink from "@kiwicom/orbit-components/lib/TextLink"
import List from "@kiwicom/orbit-components/lib/icons/List"

import Query from "../components/query"
import czechCountryQuery from "../queries/country.gql"

export const continentsQuery = gql`
  query {
    continents {
      name
    }
  }
`

export default ({ pages }) => (
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
    <hr />
    {pages &&
      pages
        .filter(x => x !== "index")
        .map(page => (
          <TextLink href={page} icon={<List />}>
            {page}
          </TextLink>
        ))}

    <Query
      query={continentsQuery}
      context={{ uri: "https://countries.trevorblades.com/" }}
    />
  </>
)
