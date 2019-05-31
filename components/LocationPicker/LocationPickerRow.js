import * as React from "react"
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import TextWrapper from "@kiwicom/orbit-components/lib/Text"
import { createFragmentContainer, graphql } from "@kiwicom/relay"

import getSlug from "./services/slug"
import PickerRow from "./primitives/PickerRow"
import toLocation from "./services/toLocation"

const LocationPickerRow = ({ item, selected, onSelect }) => {
  const { type, name, code } = item

  const slug = getSlug(toLocation(item))

  return (
    <PickerRow
      onClick={() => onSelect(toLocation(item))}
      selected={selected}
    >
      <Stack spacing="condensed" flex align="center">
        {type === "country" && (
          <CountryFlag code={code.toLowerCase()} />
        )}
        <TextWrapper weight="bold">
          {name} {slug}
        </TextWrapper>
      </Stack>
    </PickerRow>
  )
}

export default createFragmentContainer(LocationPickerRow, {
  item: graphql`
    fragment LocationPickerRow_item on Location {
      locationId
      type
      name
      code
      slug

      location {
        lat
        lng
      }

      city {
        locationId
        name
        slug
        code
      }
      country {
        locationId
        name
        slug
        code
      }
      subdivision {
        locationId
        name
        slug
        code
      }
    }
  `
})
