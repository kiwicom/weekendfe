import Query from "../components/query"
import search from "../queries/search.gql"

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

const values = {
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

export default () => (
  <Query
    query={search}
    variables={values}
    context={{ uri: "https://weekend-api.now.sh/" }}
  />
)
