import { format, addDays } from "date-fns"
import styled from "styled-components"
import Button from "@kiwicom/orbit-components/lib/Button"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import Router from "next/router"

import Query from "../components/query"
import search from "../queries/search.gql"
import Debug from "../components/debug"
import ContentContainer from "../components/ContentContainer"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"

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

const getStopovers = placesInUrl => {
  if (!placesInUrl) return undefined
  const items = placesInUrl.split("-")
  const result = []
  // eslint-disable-next-line
  for (let i = 0; i < items.length; i += 3)
    // eslint-disable-next-line fp/no-mutating-methods
    result.push({
      locations: [items[i]],
      nightsFrom: Number(items[i + 1]),
      nightsTo: Number(items[i + 2])
    })
  return result
}

const getParamsFromQuery = ({
  adults = 1,
  dateFrom,
  dateTo,
  flyFrom = "brno_cz",
  flyTo,
  stopovers
}) => ({
  params: {
    adults: Number(adults),
    dateFrom:
      dateFrom || format(addDays(new Date(), 1), "DD/MM/YYYY"),
    dateTo: dateTo || format(addDays(new Date(), 30), "DD/MM/YYYY"),
    flyFrom,
    flyTo: flyTo || flyFrom,
    stopovers: getStopovers(stopovers) || [
      { locations: ["LON"], nightsFrom: 1, nightsTo: 7 },
      { locations: ["PAR"], nightsFrom: 1, nightsTo: 7 }
    ]
  }
})

const Result = ({ query }) => (
  <>
    {query.debug && <Debug queryParams={getParamsFromQuery(query)} />}
    <Query
      query={search}
      variables={getParamsFromQuery(query)}
      context={{ uri: "https://weekend-api.now.sh/" }}
    >
      {({ data }) => (
        <ContentContainer>
          <ResultsContainer>
            <Stack direction="column" spacing="extraLoose">
              <Heading type="title1" spaceAfter="largest">
                Choose your flight combination
              </Heading>
              <Itinerary
                flights={data.search.slice(0, 10)}
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
                      pathname: "/downshift",
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
      )}
    </Query>
  </>
)

// enable passing query to main component
Result.getInitialProps = async ({ query }) => ({ query })

export default Result
