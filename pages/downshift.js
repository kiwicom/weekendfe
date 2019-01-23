import { useState, useEffect, useRef } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"
import styled from "styled-components"
import { format, addDays } from "date-fns"
import createHistory from "history/createBrowserHistory"
import createHashHistory from "history/createHashHistory"

import ContentContainer from "../components/ContentContainer"
import PlacePicker from "../components/PlacePicker"
import DatePicker from "../components/DatePicker"
import Interests from "../components/Interests"
import useOnClickOutside from "../components/useOnClickOutside"
import PlacesToVisit from "../components/PlacesToVisit"

let OurHistory = null
if (typeof window !== "undefined") {
  OurHistory = createHashHistory({
    hashType: "slash" // the default
  })

  // Listen for changes to the current location.
  const unlisten = OurHistory.listen(
    ({ pathname, state }, action) => {
      // location is an object like window.location
      console.log(action, pathname, state)
    }
  )

  // Get the current location.
  const { location } = OurHistory
}

const NomadForm = styled.div`
  max-width: 696px;
`

const StyledOrigin = styled.div`
  max-width: 640px;
`

const TopPart = () => {
  const [tripFrom, setFrom] = useState("Czech Republic")
  const [tripTo, setDestination] = useState(null)

  const [showDestination, setDestinationVisibility] = useState(false)
  const [showReturnDate, setReturnDateVisibility] = useState(false)

  const [departureDate, setDepartureDate] = useState(new Date())
  const [
    departureDatePickerOpened,
    setDepartureDatePickerVisibility
  ] = useState(false)

  const [returnDate, setReturnDate] = useState(
    addDays(new Date(), 10)
  )
  const [
    returnDatePickerOpened,
    setReturnDatePickerVisibility
  ] = useState(false)

  const selectDepartureDate = date => {
    setDepartureDate(date.date)
    setDepartureDatePickerVisibility(false)
    OurHistory.push({
      pathname: "/DepartureDate",
      search: "?date=" + date.date.toISOString().split("T")[0],
      state: { date: date.date }
    })
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
          }}
        />
        <Checkbox
          label="Set return date"
          checked={showReturnDate}
          onChange={e => {
            setReturnDateVisibility(e.target.checked)
          }}
        />
      </Stack>
    </Stack>
  )
}

const DownShift = () => (
  <ContentContainer>
    <Heading type="title1" spaceAfter="largest">
      What are you interested in?
    </Heading>
    <Interests />
    <NomadForm>
      <StyledOrigin>
        <Heading type="title1" spaceAfter="largest">
          What destinations do you want to visit?
        </Heading>
        <TopPart />
      </StyledOrigin>
      <PlacesToVisit />
    </NomadForm>
  </ContentContainer>
)

export default DownShift
