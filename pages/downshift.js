import { useState, useEffect, useRef } from "react"
import InputField from "@kiwicom/orbit-components/lib/InputField"
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
  const [tripFrom, setFrom] = useState("")

  return (
    <Stack direction="row">
      <PlacePicker
        label="From"
        inputValue={tripFrom}
        setInputValue={setFrom}
      />
    </Stack>
  )
}

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}

const PlaceToVisit = () => {
  const [tripFrom, setFrom] = useState("")

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  // State for our slider
  const [isOpenSlider, setSliderVisibility] = useState(false)
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setSliderVisibility(false))

  return (
    <Stack direction="row">
      <PlacePicker inputValue={tripFrom} setInputValue={setFrom} />
      <Slider
        openRef={ref}
        isOpen={isOpenSlider}
        onFocus={() => setSliderVisibility(true)}
        defaultValues={[1, 8]}
        onChange={(from, to) => console.log(`${from}, ${to}`)}
        // TODO: onBlur or clickOutside ref
      />
      <Button type="secondary" disabled iconLeft={<CloseCircle />} />
    </Stack>
  )
}

const DownShift = () => {
  const [selectedDate, setDate] = useState(null)
  const [datePickerOpened, setDatePickerVisibility] = useState(false)

  const selectDate = date => {
    setDate(date.date)
    setDatePickerVisibility(false)
  }

  const openDatePicker = () => setDatePickerVisibility(true)

  return (
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
                <InputField inlineLabel label="From" />
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
              <Stack direction="row">
                <Checkbox label="Return to origin" checked />
                <Checkbox label="Set return date" />
              </Stack>
            </Stack>
          </StyledOrigin>
          <Heading type="title2" spaceAfter="medium">
            Places to visit
          </Heading>
          <Stack spaceAfter="medium">
            <PlaceToVisit />
            <PlaceToVisit />
            <PlaceToVisit />
          </Stack>
          <StyledButtons>
            <Stack direction="row">
              <Button type="secondary" iconLeft={<Plus />} block>
                Add destination
              </Button>
              <Button iconLeft={<Search />} block>
                Search
              </Button>
            </Stack>
          </StyledButtons>
        </NomadForm>
      </ContentContainer>
    </>
  )
}

export default DownShift
