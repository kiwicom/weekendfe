import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice"
import City from "@kiwicom/orbit-components/lib/icons/City"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Downshift from "downshift"

import Query from "./query"
import locationsQuery from "../queries/locations.gql"

const StyledPlacePicker = styled.div`
  width: 100%;
`

const StyledResults = styled.div`
  width: 100%;
  max-height: 270px;
  position: absolute;
  top: ${({ theme }) =>
    `calc(${theme.orbit.heightInputNormal} + ${
      theme.orbit.spaceXSmall
    })`};
  z-index: 10;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
`

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay]
  )

  return debouncedValue
}

const PlacePicker = ({
  defaultValue,
  onChange = () => {},
  label = "Via"
}) => {
  const [value, setValue] = useState(defaultValue)
  const debouncedValue = useDebounce(value, 150)

  return (
    <StyledPlacePicker>
      <Downshift
        itemToString={item => (item ? item.name : "")}
        initialSelectedItem={defaultValue}
        onStateChange={({ inputValue }) => {
          if (inputValue) {
            setValue(inputValue)
          }
        }}
        onChange={onChange}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          selectedItem,
          openMenu,
          highlightedIndex
        }) => (
          /* TODO: use InputWrapper, needs getRootProps */
          <div style={{ position: "relative" }}>
            <InputField
              {...getInputProps({
                // here's the interesting part
                onFocus: openMenu
              })}
              inlineLabel
              label={label}
            />
            {isOpen ? (
              <Results
                value={debouncedValue}
                highlightedIndex={highlightedIndex}
                selectedItem={selectedItem}
                getItemProps={getItemProps}
              />
            ) : null}
          </div>
        )}
      </Downshift>
    </StyledPlacePicker>
  )
}

const Results = ({
  value,
  selectedItem,
  highlightedIndex,
  getItemProps
}) => (
  <StyledResults>
    <Query
      query={locationsQuery}
      variables={{
        query: value
      }}
      context={{
        uri: "https://weekend-api.now.sh"
      }}
    >
      {({ data: { locations } }) =>
        locations.map(({ name }, index) => (
          <div
            {...getItemProps({
              item: name,
              index
            })}
            key={name}
          >
            <ListChoice
              key={name}
              icon={<City />}
              selectable
              selected={selectedItem === name}
              title={`${name} [${code}/${id}]`}
              description={
                highlightedIndex === index ? "press for select" : ""
              }
              {...getItemProps({
                item: { name, id, code },
                index
              })}
            />
          </div>
        ))
      }
    </Query>
  </StyledResults>
)

export default PlacePicker
