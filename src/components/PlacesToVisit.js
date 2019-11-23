import React, { useState, useRef } from "react"
import { Heading, Stack, Button } from "@kiwicom/orbit-components"
import {
  CloseCircle,
  Plus,
  Search
} from "@kiwicom/orbit-components/lib/icons"
import styled from "styled-components"

import PlacePicker from "./PlacePicker"
import Slider from "./Slider"
import Debug from "./debug"
import useOnClickOutside from "../services/useOnClickOutside"

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
  const ref = useRef(null)
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
        isOpen={isOpenSlider}
        onFocus={() => setSliderVisibility(true)}
        onBlur={() => setSliderVisibility(false)}
        value={tripDays}
        onChange={val => setDays(val)}
      />
      <Button
        type="secondary"
        iconLeft={<CloseCircle />}
        disabled={!onRemoveClick}
        onClick={onRemoveClick}
        title="Remove"
      />
    </Stack>
  )
}

const defaultDays = [2, 5]

/* function reducer(places, { type, payload }) {
  const newPlaces = places && places.concat()
  switch (type) {
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return places
  }
} */

const PlacesToVisit = ({
  defaultValue = [["Mexico", defaultDays]],
  // eslint-disable-next-line no-console
  onChange = state => console.log("new places to visit", state),
  onSearchClick,
  showDebug = false
}) => {
  /*
    TODO:
    Refactor places state and all handlers to useReducer hook with own reducer and dispatch
   */
  const [places, setPlaces] = useState(defaultValue)
  const removePlace = itemIndex => () => {
    setPlaces(val => {
      const newValue = val.filter((_, index) => index !== itemIndex)
      onChange(newValue)
      return newValue
    })
  }
  const changeDays = index => days => {
    setPlaces(val => {
      const newValue = val
      newValue[index][1] = days
      onChange(newValue)
      return newValue
    })
  }
  const changePlace = index => place => {
    setPlaces(val => {
      const newValue = val
      newValue[index][0] = place
      onChange(newValue)
      return newValue
    })
  }
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
            fullWidth
            disabled={!places[places.length - 1][0]}
            onClick={() => {
              setPlaces(val => val.concat([[null, [1, 3]]]))
            }}
          >
            Add destination
          </Button>
          <Button
            iconLeft={<Search />}
            fullWidth
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
