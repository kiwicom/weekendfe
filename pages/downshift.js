import { useState, useEffect, useRef } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"
import styled from "styled-components"

import ContentContainer from "../components/ContentContainer"
import PlacePicker from "../components/PlacePicker"
import DatePicker from "../components/DatePicker"
import Interests from "../components/Interests"
import useOnClickOutside from "../components/useOnClickOutside"
import PlacesToVisit from "../components/PlacesToVisit"

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

  const [selectedDate, setDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [datePickerOpened, setDatePickerVisibility] = useState(false)

  const selectDate = date => {
    setDate(date.date)
    setDatePickerVisibility(false)
  }

  const openDatePicker = () => setDatePickerVisibility(true)

  return (
    <Stack spaceAfter="largest">
      <Stack direction="row">
        <PlacePicker
          label="From"
          defaultValue={tripFrom}
          onChange={setFrom}
        />
        <DatePicker
          label="Departure"
          onFocus={openDatePicker}
          // TODO: onBlur or clickOutside ref
          // onBlur={closeDatePicker}
          shown={datePickerOpened}
          currentDate={selectedDate}
          onDateSelected={selectDate}
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
              label="Arrival"
              onFocus={openDatePicker}
              // TODO: onBlur or clickOutside ref
              // onBlur={closeDatePicker}
              shown={datePickerOpened}
              currentDate={selectedDate}
              onDateSelected={selectDate}
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
          checked={!showReturnDate}
          onChange={e => {
            setReturnDateVisibility(!e.target.checked)
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
