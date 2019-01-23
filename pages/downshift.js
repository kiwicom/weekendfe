import { useState, useRef } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"
import styled from "styled-components"
import { format, addDays } from "date-fns"
import Router from "next/router"

import ContentContainer from "../components/ContentContainer"
import PlacePicker from "../components/PlacePickerLocations"
import DatePicker from "../components/DatePicker"
import Interests from "../components/Interests"
import useOnClickOutside from "../components/useOnClickOutside"
import PlacesToVisit from "../components/PlacesToVisit"
import useUrl from "../components/useUrl"

const NomadForm = styled.div`
  max-width: 696px;
`

const StyledOrigin = styled.div`
  max-width: 640px;
`

const defaultValues = {
  interest: "gastronomy",
  from: "Czech Republic",
  start: new Date(),
  places: [["Italy", [2, 5]]]
}

const TopPart = ({ from, to, start, end }) => {
  const [tripFrom, setFrom] = useUrl(
    from || defaultValues.from,
    "from"
  )

  const [showDestination, setDestinationVisibility] = useState(false)
  const [tripTo, setDestination] = useUrl(to, "to")

  const [showReturnDate, setReturnDateVisibility] = useState(false)
  const [departureDate, setDepartureDate] = useUrl(
    start ? new Date(start) : defaultValues.start,
    "start",
    date => format(date, "YYYY-MM-DD")
  )
  const [
    departureDatePickerOpened,
    setDepartureDatePickerVisibility
  ] = useState(false)

  const [returnDate, setReturnDate] = useUrl(
    end ? new Date(end) : addDays(new Date(), 10),
    "end",
    date => format(date, "YYYY-MM-DD")
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
          }}
        />
      </Stack>
    </Stack>
  )
}

const changePlacesState = newPlaces => {
  if (typeof window === "undefined") return
  // debugger
  const newUrl = {
    pathname: "/downshift",
    query: {
      ...Router.query,
      places: newPlaces.toString().replace(/,/g, "-")
    }
  }
  // eslint-disable-next-line fp/no-mutating-methods
  Router.push(newUrl, newUrl, { shallow: true })
}

// Mexico,2,5,Poland,1,3 => [["Mexico", defaultDays]]
const UrlToPlaces = url => {
  if (!url) return undefined
  const items = url.split("-")
  const result = []
  // eslint-disable-next-line
  for (let i = 0; i < items.length; i += 3)
    // eslint-disable-next-line fp/no-mutating-methods
    result.push([items[i], [items[i + 1], items[i + 2]]])
  return result
}

const DownShift = ({ query, places }) => (
  <ContentContainer>
    <Heading type="title1" spaceAfter="largest">
      What are you interested in?
    </Heading>
    <Interests
      defaultValue={query.interest || defaultValues.interest}
    />
    <NomadForm>
      <StyledOrigin>
        <Heading type="title1" spaceAfter="largest">
          What destinations do you want to visit?
        </Heading>
        <TopPart {...query} />
      </StyledOrigin>
      <PlacesToVisit
        onChange={changePlacesState}
        defaultValue={places}
        onSearchClick={places => {
          const values = { ...defaultValues, ...Router.query }
          alert(JSON.stringify(values, null, 2))
        }}
      />
    </NomadForm>
  </ContentContainer>
)

DownShift.getInitialProps = async ({ req, query }) => {
  const places = UrlToPlaces(query.places) || defaultValues.places
  return { query, places }
}

export default DownShift
