import React from "react"
import { graphql, QueryRenderer } from "@adeira/relay"
import styled from "styled-components"
import Loading from "@kiwicom/orbit-components/lib/Loading"

import ListChoice from "./ListChoice"
import { weekendapiEnvironment } from "../../../lib/enviroment"

const StyledResults = styled.div`
  width: 100%;
  max-height: 270px;
  position: absolute;
  top: ${({ theme }) =>
    `calc(${theme.orbit.heightInputNormal} + ${theme.orbit.spaceXSmall})`};
  z-index: 10;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaised};
`

const renderQueryRendererResponse = ({
  renderProps,
  getItemProps,
  highlightedIndex
}) =>
  renderProps.locations
    .filter(Boolean)
    .map(({ name, code, id }, index) => (
      <ListChoice
        key={`${name}-${id}`}
        title={`${name} [${code}/${id}]`}
        selected={highlightedIndex === index}
        {...getItemProps({
          item: { name, id, code },
          index
        })}
      />
    ))

const Results = ({ value, highlightedIndex, getItemProps }) => (
  <StyledResults>
    <QueryRenderer
      clientID="https://github.com/kiwicom/weekendfe"
      query={graphql`
        query DataListQuery($query: String!) {
          locations(query: $query, limit: 20) {
            name
            code
            id
          }
        }
      `}
      variables={{
        query: value ? value.name || value : null
      }}
      environment={weekendapiEnvironment}
      onLoading={() => <Loading type="searchLoader" />}
      onResponse={renderProps =>
        renderQueryRendererResponse({
          renderProps,
          getItemProps,
          highlightedIndex
        })
      }
    />
  </StyledResults>
)

export default Results
