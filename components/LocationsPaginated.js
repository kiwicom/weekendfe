import React from "react"
import { createRefetchContainer, graphql } from "@kiwicom/relay"
import Button from "@kiwicom/orbit-components/lib/Button"

const LocationsPaginated = ({ relay, data }) => {
  const loadMore = () => {
    relay.refetch(
      refetchVariables => ({
        ...refetchVariables,
        after: data.incrementalPagination?.pageInfo.endCursor
      }),
      null,
      error => {
        if (error) {
          console.error(error) // eslint-disable-line no-console
        }
      }
    )
  }

  return (
    <>
      <ol>
        {data?.incrementalPagination.edges
          .map(edge => edge.node)
          .filter(Boolean)
          .map(({ name }) => <li>{name}</li>)}
      </ol>
      <Button onClick={loadMore} size="small">
        Load more!
      </Button>
    </>
  )
}

export default createRefetchContainer(
  LocationsPaginated,
  {
    data: graphql`
      fragment LocationsPaginated_data on RootQuery
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 20 }
          after: { type: "String" }
        ) {
        incrementalPagination: allLocations(
          first: $count
          after: $after
        ) @connection(key: "allLocations_incrementalPagination") {
          edges {
            node {
              name
            }
          }
          pageInfo {
            endCursor
          }
        }
      }
    `
  },
  graphql`
    query LocationsPaginatedQuery($count: Int, $after: String) {
      ...LocationsPaginated_data
        @arguments(count: $count, after: $after)
    }
  `
)
