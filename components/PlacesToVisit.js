import { useState, useRef } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Button from "@kiwicom/orbit-components/lib/Button"
import CloseCircle from "@kiwicom/orbit-components/lib/icons/CloseCircle"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import styled from "styled-components"

import PlacePicker from "./PlacePicker"
import Slider from "./Slider"
import Debug from "./debug"
import useOnClickOutside from "./useOnClickOutside"

const StyledButtons = styled.div`
  max-width: 640px;
`

const PlaceToVisit = ({
  place,
  changePlace,
  days = [2, 8],
  changeDays,
  onRemoveClick
}) => {
  // const [tripFrom, setFrom] = useState(place)
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
      <PlacePicker defaultValue={place} onChange={changePlace} />
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
  const changePlace = index => place => {
    const newPlaces = places.concat()
    newPlaces[index][0] = place
    changePlaces(newPlaces)
  }

  return (
    <>
      <Heading type="title2" spaceAfter="medium">
        Places to visit
      </Heading>
      <Stack spaceAfter="medium">
        {places.map(([place, days], i) => (
          <>
            <PlaceToVisit
              onRemoveClick={i !== 0 && removePlace(i)}
              place={place}
              days={days}
              changeDays={changeDays(i)}
              changePlace={changePlace(i)}
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
            disabled={!places[places.length - 1][0]}
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

export default PlacesToVisit
