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
    locations(query: $query, limit: 5) {
      id
      ...AutocompleteItem_location
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
              <AutocompleteItem
                key={location.id}
                location={location}
              />
            )
          })
        }}
      />
    </Stack>
  )
}

export default Autocomplete
