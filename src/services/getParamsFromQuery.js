import { format, addDays } from "date-fns"

import getStopovers from "./getStopovers"

const formatDate = date => format(date, "dd/MM/yyyy")

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
    dateFrom: formatDate(
      dateFrom ? new Date(dateFrom) : addDays(new Date(), 1)
    ),
    dateTo: formatDate(
      dateTo ? new Date(dateTo) : addDays(new Date(), 30)
    ),
    flyFrom,
    flyTo: flyTo || flyFrom,
    stopovers: getStopovers(stopovers) || [
      { locations: ["LON"], nightsFrom: 1, nightsTo: 7 },
      { locations: ["PAR"], nightsFrom: 1, nightsTo: 7 }
    ]
  }
})

export default getParamsFromQuery
