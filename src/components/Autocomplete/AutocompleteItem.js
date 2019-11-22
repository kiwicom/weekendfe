// @flow

import * as React from "react"
import { Tile } from "@kiwicom/orbit-components"
import { createFragmentContainer, graphql } from "@adeira/relay"

import type { AutocompleteItem_location as AutocompleteItemType } from "./__generated__/AutocompleteItem_location.graphql"

type Props = {|
  location: AutocompleteItemType
|}

const AutocompleteItem = ({ location }: Props) => {
  return (
    <Tile
      title={location.name}
      description={
        location.type != null
          ? `Type: ${location.type}`
          : "Unknown type"
      }
    />
  )
}

export default createFragmentContainer(AutocompleteItem, {
  location: graphql`
    fragment AutocompleteItem_location on Location {
      name
      type
    }
  `
})
