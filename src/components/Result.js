import * as React from "react"
import Router from "next/router"
import styled from "styled-components"
import { graphql, QueryRenderer } from "@adeira/relay"
import {
  Button,
  Heading,
  Loading,
  Stack,
} from "@kiwicom/orbit-components"
import { ChevronLeft } from "@kiwicom/orbit-components/lib/icons"

import Debug from "./debug"
import getParamsFromQuery from "../services/getParamsFromQuery"
import { weekendapiEnvironment } from "../services/enviroment"
import ContentContainer from "./ContentContainer"
import Itinerary from "./Itinerary"
import Footer from "./Footer"

const ResultsContainer = styled.div`
  max-width: 1024px;
  padding-bottom: 90px;
`

/*
For usage online
{
  "params": {
    "adults": 1,
    "dateFrom": "29/01/2019",
    "dateTo": "29/03/2019",
    "flyFrom": "vienna_at",
    "flyTo": "vienna_at",
    "stopovers": [
      {"locations": ["LON"], "nightsFrom": 1, "nightsTo": 7},
       {"locations": ["PAR"], "nightsFrom": 1, "nightsTo": 7}
    ]
  }
}
*/
const renderQueryRendererResponse = (rendererProps, query) => (
  <ContentContainer>
    <ResultsContainer>
      <Stack direction="column" spacing="extraLoose">
        <Heading type="title1" spaceAfter="largest">
          Choose your flight combination
        </Heading>
        <Itinerary
          flights={rendererProps}
          interest={query.interest}
        />
      </Stack>
      <Footer
        leftActions={
          <Button
            type="secondary"
            iconLeft={<ChevronLeft />}
            onClick={() =>
              // eslint-disable-next-line fp/no-mutating-methods
              Router.push({
                pathname: "/",
                query: Router.query
              })
            }
          >
            Previous Step
          </Button>
        }
      />
    </ResultsContainer>
  </ContentContainer>
)

const Result = ({ query }) => {
  return (
    <>
      {query.debug && (
        <Debug queryParams={getParamsFromQuery(query)} />
      )}
      <QueryRenderer
        clientID="https://github.com/kiwicom/weekendfe"
        query={graphql`
          query ResultQuery($params: SearchParams!) {
            ...Itinerary_flights @arguments(params: $params)
          }
        `}
        variables={getParamsFromQuery(query)}
        environment={weekendapiEnvironment}
        onLoading={() => (
          <Loading type="pageLoader" text="Loading results" />
        )}
        onResponse={rendererProps =>
          renderQueryRendererResponse(rendererProps, query)
        }
      />
    </>
  )
}

export default Result
