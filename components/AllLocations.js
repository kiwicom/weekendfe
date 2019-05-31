import * as React from "react"
import { createFragmentContainer, graphql } from "@kiwicom/relay"

const AllLocations = ({ locations }) => {
  const { allLocations } = locations
  return (
    <ol>
      {allLocations.edges
        ? allLocations.edges
            .map(edge => edge && edge.node)
            .filter(Boolean)
            .map(({ name }) => <li>{name}</li>)
        : null}
    </ol>
  )
}

export default createFragmentContainer(AllLocations, {
  locations: graphql`
    fragment AllLocations_locations on RootQuery {
      allLocations(first: 20) {
        edges {
          node {
            name
          }
        }
      }
    }
  `
})
