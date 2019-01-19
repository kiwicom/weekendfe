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

import Debug from "../components/debug"

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

const PlaceToVisit = ({
  place,
  days = [2, 8],
  changeDays,
  onRemoveClick
}) => {
  const [tripFrom, setFrom] = useState(place)
  const [tripDays, setDaysState] = useState(days)

  const setDays = daysChanged => {
    setDaysState(daysChanged)
    if (changeDays) changeDays(daysChanged)
  }

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
        defaultValues={tripDays}
        onChange={(from, to) => setDays([from, to])}
      />
      <Button
        type="secondary"
        iconLeft={<CloseCircle />}
        disabled={!onRemoveClick}
        onClick={onRemoveClick}
      />
    </Stack>
  )
}

const PlacesToVisit = () => {
  const defaultDays = [2, 5]
  const [places, changePlaces] = useState([
    ["Australia", defaultDays]
  ])
  const addPlace = () => changePlaces(places.concat([[null, [1, 3]]]))
  const removePlace = indexToRemove => () =>
    changePlaces(
      places.filter((val, index) => index !== indexToRemove)
    )
  const changeDays = index => days => {
    const newPlaces = places.concat()
    newPlaces[index][1] = days
    changePlaces(newPlaces)
  }

  return (
    <>
      <Stack spaceAfter="medium">
        {places.map(([place, days], i) => (
          <>
            <PlaceToVisit
              onRemoveClick={i !== 0 && removePlace(i)}
              place={place}
              days={days}
              changeDays={changeDays(i)}
            />
          </>
        ))}
      </Stack>
      <StyledButtons>
        <Stack direction="row">
          <Button
            type="secondary"
            iconLeft={<Plus />}
            block
            onClick={addPlace}
          >
            Add destination
          </Button>
          <Button iconLeft={<Search />} block>
            Search
          </Button>
        </Stack>
      </StyledButtons>
      <hr />
      <Debug {...places} />
    </>
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
          <PlacesToVisit />
        </NomadForm>
      </ContentContainer>
    </>
  )
}

export default DownShift
