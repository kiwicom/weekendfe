// @flow

import * as React from "react"
import { Stack, Tile } from "@kiwicom/orbit-components"
import { QueryRenderer, graphql } from "@adeira/relay"

import { weekendapiEnvironment } from "../../services/enviroment"

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
        variables={{ query: search }}
        onResponse={data =>
          data.locations.map(location => (
            <Tile
              key={location.id}
              title={location.name}
              description={`Type: ${location.type}`}
            />
          ))
        }
      />
    </Stack>
  )
}

export default Autocomplete
