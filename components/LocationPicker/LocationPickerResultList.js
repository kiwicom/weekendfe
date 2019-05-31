import * as React from "react"
import { createFragmentContainer, graphql } from "@kiwicom/relay"

import LocationPickerRow from "./LocationPickerRow"

const LocationPickerResultList = ({ list, selectedId, onSelect }) =>
  list.edges
    ? list.edges
        .map(edge => edge?.node)
        .filter(Boolean)
        .map(item => (
          // $FlowExpected: Relay
          <LocationPickerRow
            item={item}
            key={item.id}
            selected={selectedId === item.id}
            onSelect={onSelect}
          />
        ))
    : null

export default createFragmentContainer(LocationPickerResultList, {
  list: graphql`
    fragment LocationPickerResultList_list on LocationConnection {
      edges {
        node {
          id
          ...LocationPickerRow_item
        }
      }
    }
  `
})
