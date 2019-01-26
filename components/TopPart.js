import { useRef, useState } from "react"
import { addDays, format } from "date-fns"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"

import useUrl from "./useUrl"
import Stepper from "./Stepper"
import PlacePicker from "./PlacePickerLocations"
import DatePicker from "./DatePicker"
import useOnClickOutside from "./useOnClickOutside"

const today = new Date()
const day = 60 * 60 * 24 * 1000

export const defaultValues = {
  adults: 2,
  interest: "drinks",
  flyFrom: { id: "brno_cz", name: "Brno" },
  dateFrom: new Date(),
  dateTo: new Date(today.getTime() + day * 7),
  places: [[{ name: "Italy", id: "IT", code: "IT" }, [2, 5]]]
}

const TopPart = ({ flyFrom, flyTo, dateFrom, dateTo, adults }) => {
  const [tripFrom, setFrom] = useUrl(flyFrom, "flyFrom", item =>
    item ? item.id : undefined
  )
  const [tripAdults, setAdults] = useUrl(adults, "adults")

  const [showDestination, setDestinationVisibility] = useState(
    Boolean(flyTo)
  )
  const [tripTo, setDestination] = useUrl(flyTo, "flyTo", item =>
    item ? item.id : undefined
  )

  const [showReturnDate, setReturnDateVisibility] = useState(
    Boolean(dateTo)
  )
  const [departureDate, setDepartureDate] = useUrl(
    dateFrom ? new Date(dateFrom) : defaultValues.dateFrom,
    "dateFrom",
    date => format(date, "YYYY-MM-DD")
  )
  const [
    departureDatePickerOpened,
    setDepartureDatePickerVisibility
  ] = useState(false)

  const [returnDate, setReturnDate] = useUrl(
    dateTo ? new Date(dateTo) : addDays(new Date(), 10),
    "dateTo",
    date => (date ? format(date, "YYYY-MM-DD") : undefined)
  )
  const [
    returnDatePickerOpened,
    setReturnDatePickerVisibility
  ] = useState(false)

  const selectDepartureDate = date => {
    setDepartureDate(date.date)
    setDepartureDatePickerVisibility(false)
  }

  const selectReturnDate = date => {
    setReturnDate(date.date)
    setReturnDatePickerVisibility(false)
  }

  const departureDatepickerRef = useRef()
  useOnClickOutside(departureDatepickerRef, () =>
    setDepartureDatePickerVisibility(false)
  )

  const returnDatepickerRef = useRef()
  useOnClickOutside(returnDatepickerRef, () =>
    setReturnDatePickerVisibility(false)
  )

  return (
    <Stack spaceAfter="largest">
      <Stack direction="row" justify="end">
        <Stack basis="calc(25% - 16px)" shrink={false} grow={false}>
          <Stepper
            min={1}
            max={20}
            defaultValue={tripAdults}
            onChange={setAdults}
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <PlacePicker
          label="From"
          defaultValue={tripFrom}
          onChange={setFrom}
        />
        <DatePicker
          openRef={departureDatepickerRef}
          label="Departure"
          onFocus={() => setDepartureDatePickerVisibility(true)}
          shown={departureDatePickerOpened}
          currentDate={departureDate}
          onDateSelected={selectDepartureDate}
        />
      </Stack>
      {(showDestination || showReturnDate) && (
        <Stack direction="row">
          {showDestination && (
            <PlacePicker
              label="To"
              defaultValue={tripTo}
              onChange={setDestination}
            />
          )}
          {showReturnDate && (
            <DatePicker
              openRef={returnDatepickerRef}
              label="Arrival"
              onFocus={() => setReturnDatePickerVisibility(true)}
              shown={returnDatePickerOpened}
              currentDate={returnDate}
              onDateSelected={selectReturnDate}
            />
          )}
        </Stack>
      )}
      <Stack direction="row">
        <Checkbox
          label="Return to origin"
          checked={!showDestination}
          onChange={e => {
            setDestinationVisibility(!e.target.checked)
            setDestination(null)
          }}
        />
        <Checkbox
          label="Set return date"
          checked={showReturnDate}
          onChange={e => {
            setReturnDateVisibility(e.target.checked)
            setReturnDate(
              showReturnDate ? null : defaultValues.dateTo
            )
          }}
        />
      </Stack>
    </Stack>
  )
}

export default TopPart
