import { format, addDays } from "date-fns"

import Query from "../components/query"
import search from "../queries/search.gql"
import Debug from "../components/debug"

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

const sampleValues = {
  params: {
    adults: 1,
    dateFrom: "29/01/2019",
    dateTo: "29/03/2019",
    flyFrom: "vienna_at",
    flyTo: "vienna_at",
    stopovers: [
      { locations: ["LON"], nightsFrom: 1, nightsTo: 7 },
      { locations: ["PAR"], nightsFrom: 1, nightsTo: 7 }
    ]
  }
}

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
    <Debug queryParams={getParamsFromQuery(query)} />
    <Query
      query={search}
      variables={getParamsFromQuery(query)}
      context={{ uri: "https://weekend-api.now.sh/" }}
    />
  </>
)

// enable passing query to main component
Result.getInitialProps = async ({ query }) => ({ query })

export default Result
