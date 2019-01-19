import { useState, useEffect, useRef } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"
import Button from "@kiwicom/orbit-components/lib/Button"
import CloseCircle from "@kiwicom/orbit-components/lib/icons/CloseCircle"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import styled from "styled-components"

import ContentContainer from "../components/ContentContainer"
import PlacePicker from "../components/PlacePicker"
import DatePicker from "../components/DatePicker"
import Slider from "../components/Slider"
import Interests from "../components/Interests"
import Debug from "../components/debug"
import useOnClickOutside from "../components/useOnClickOutside"
import PlacesToVisit from "../components/PlacesToVisit"

const NomadForm = styled.div`
  max-width: 696px;
`

const StyledOrigin = styled.div`
  max-width: 640px;
`

const StyledButtons = styled.div`
  max-width: 640px;
`
const TopPart = () => {
  const [tripFrom, setFrom] = useState("Czech Republic")
  const [selectedDate, setDate] = useState(null)
  const [datePickerOpened, setDatePickerVisibility] = useState(false)

  const selectDate = date => {
    setDate(date.date)
    setDatePickerVisibility(false)
  }

  const openDatePicker = () => setDatePickerVisibility(true)

  return (
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
  )
}

const DownShift = () => (
  <>
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
          <Stack spaceAfter="largest">
            <TopPart />
            <Stack direction="row">
              <Checkbox label="Return to origin" checked />
              <Checkbox label="Set return date" />
            </Stack>
          </Stack>
        </StyledOrigin>
        <PlacesToVisit />
      </NomadForm>
    </ContentContainer>
  </>
)

export default DownShift
