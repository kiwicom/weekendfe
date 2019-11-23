// @flow

import * as React from "react"
import { Alert, Stack } from "@kiwicom/orbit-components"
import { QueryRenderer, graphql } from "@adeira/relay"

import { weekendapiEnvironment } from "../../services/enviroment"
import type {
  AutocompleteQueryResponse,
  AutocompleteQueryVariables
} from "./__generated__/AutocompleteQuery.graphql"
import AutocompleteItem from "./AutocompleteItem"

type Props = {|
  search: string
|}

const query = graphql`
  query AutocompleteQuery($query: String!) {
    allLocations(search: $query, first: 5) {
      edges {
        node {
          id
          ...AutocompleteItem_location
        }
      }
    }
  }
`

const Autocomplete = ({ search }: Props) => {
  return (
    <Stack spacing="none">
      <QueryRenderer
        environment={weekendapiEnvironment}
        query={query}
        variables={({ query: search }: AutocompleteQueryVariables)}
        onResponse={(data: AutocompleteQueryResponse) => {
          const edges = data.allLocations?.edges

          if (!edges || edges.length === 0) {
            return <Alert type="info">Sorry, no locations!</Alert>
          }

          return edges.filter(Boolean).map(({ node }) => {
            if (!node) {
              return null
            }

            return <AutocompleteItem key={node.id} location={node} />
          })
        }}
      />
    </Stack>
  )
}

export default Autocomplete
