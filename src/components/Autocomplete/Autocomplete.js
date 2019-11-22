// @flow

import * as React from "react"
import { Alert, Stack, Tile } from "@kiwicom/orbit-components"
import { QueryRenderer, graphql } from "@adeira/relay"

import { weekendapiEnvironment } from "../../services/enviroment"
import type {
  AutocompleteQueryResponse,
  AutocompleteQueryVariables
} from "./__generated__/AutocompleteQuery.graphql"

type Props = {|
  search: string
|}

const query = graphql`
  query AutocompleteQuery($query: String!) {
    locations(query: $query, limit: 5) {
      id
      name
      type
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
          if (!data.locations || data.locations.length === 0) {
            return <Alert type="info">Sorry, no locations!</Alert>
          }

          return data.locations.map(location => {
            if (!location) {
              return null
            }

            return (
              <Tile
                key={location.id}
                title={location.name}
                description={
                  location.type != null
                    ? `Type: ${location.type}`
                    : "Unkown type"
                }
              />
            )
          })
        }}
      />
    </Stack>
  )
}

export default Autocomplete
