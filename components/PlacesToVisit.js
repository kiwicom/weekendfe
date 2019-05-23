import { useState, useRef, useReducer } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Button from "@kiwicom/orbit-components/lib/Button"
import CloseCircle from "@kiwicom/orbit-components/lib/icons/CloseCircle"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import styled from "styled-components"

import PlacePicker from "./PlacePickerLocations"
import Slider from "./Slider"
import Debug from "./debug"
import useOnClickOutside from "./useOnClickOutside"

const StyledButtons = styled.div`
  max-width: 756px;
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
      <PlacePicker
        defaultValue={place && place.id}
        onChange={changePlace}
      />
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

const defaultDays = [2, 5]

function reducer(places, { type, payload }) {
  console.log(places)
  const newPlaces = places && places.concat()
  switch (type) {
    case "reset":
      return payload || [["Australia", defaultDays]]
    case "addPlace":
      return places.concat([[null, [1, 3]]])
    case "removePlace":
      return places.filter((val, index) => index !== payload.index)
    case "changeDays":
      newPlaces[payload.index][1] = payload.days
      return newPlaces
    case "changePlace":
      newPlaces[payload.index][0] = payload.place
      return newPlaces
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return places
  }
}

const logReducer = (fn, logger) =>
  // eslint-disable-next-line func-names
  function() {
    // eslint-disable-next-line
    const before = arguments[0]
    // eslint-disable-next-line
    const result = fn(...arguments) // fn.apply(null, arguments)
    if (logger && before !== result) logger(result)
    return result
  }

const PlacesToVisit = ({
  defaultValue = [["Mexico", defaultDays]],
  onChange = state => console.log("new places to visit", state),
  onSearchClick,
  showDebug = false
}) => {
  const loggReducer = logReducer(reducer, onChange)
  const [places, dispatch] = useReducer(loggReducer, defaultValue, {
    type: "reset",
    payload: defaultValue
  })
  const action = (type, payload) => dispatch({ type, payload })
  const removePlace = index => () => action("removePlace", { index })
  const changeDays = index => days =>
    action("changeDays", { index, days })
  const changePlace = index => place =>
    action("changePlace", { index, place })
  return (
    <>
      <Heading type="title2" spaceAfter="medium">
        Places to visit
      </Heading>
      <Stack spaceAfter="medium">
        {places.map(([place, days], i) => (
          <PlaceToVisit
            onRemoveClick={i !== 0 ? removePlace(i) : undefined}
            place={place}
            days={days}
            // eslint-disable-next-line
            key={i}
            changeDays={changeDays(i)}
            changePlace={changePlace(i)}
          />
        ))}
      </Stack>
      <StyledButtons>
        <Stack direction="row">
          <Button
            type="secondary"
            iconLeft={<Plus />}
            block
            disabled={!places[places.length - 1][0]}
            onClick={() => action("addPlace")}
          >
            Add destination
          </Button>
          <Button
            iconLeft={<Search />}
            block
            disabled={typeof onSearchClick !== "function"}
            onClick={() => onSearchClick(places)}
          >
            Search
          </Button>
        </Stack>
      </StyledButtons>

      {showDebug && [<hr />, <Debug {...places} />]}
    </>
  )
}

export default PlacesToVisit
