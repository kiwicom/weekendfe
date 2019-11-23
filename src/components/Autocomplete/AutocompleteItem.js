// @flow

import * as React from "react"
import Link from "next/link"
import { Tile } from "@kiwicom/orbit-components"
import { createFragmentContainer, graphql } from "@adeira/relay"

import type { AutocompleteItem_location as AutocompleteItemType } from "./__generated__/AutocompleteItem_location.graphql"

type Props = {|
  location: AutocompleteItemType
|}

const AutocompleteItem = ({ location }: Props) => {
  return (
    <Link href="/result/:id" as={`/result/${location.id}`}>
      <Tile
        title={location.name}
        description={
          location.type != null
            ? `Type: ${location.type}`
            : "Unknown type"
        }
      />
    </Link>
  )
}

export default createFragmentContainer(AutocompleteItem, {
  location: graphql`
    fragment AutocompleteItem_location on Location {
      id
      name
      type
    }
  `
})
