import React, { useState } from "react"
import { graphql, QueryRenderer } from "@adeira/relay"
import styled from "styled-components"
import {
  Loading,
  InputField,
  ButtonLink
} from "@kiwicom/orbit-components"
import Downshift from "downshift"
import { Close } from "@kiwicom/orbit-components/lib/icons"

import { weekendapiEnvironment } from "../../services/enviroment"
import useDebounce from "../../services/useDebounce"
import Results from "./DataList"
import PlacePickerInput from "./PlacePickerInput"

const StyledPlacePicker = styled.div`
  width: 100%;
`

const PlacePicker = ({
  defaultValue,
  label = "Via",
  onChange = () => {}
}) => {
  const [value, setValue] = useState(defaultValue)
  const [changed, setChanged] = useState(false)
  const debouncedValue = useDebounce(value, 150)

  const handleStateChange = ({ inputValue }) => {
    if (inputValue) {
      setValue(inputValue)
      setChanged(true)
    }
  }

  return (
    <StyledPlacePicker>
      <Downshift
        itemToString={item => (item ? item.name : "")}
        initialSelectedItem={defaultValue}
        onStateChange={handleStateChange}
        onChange={onChange}
        id="place-picker"
      >
        {(
          {
            getInputProps,
            getItemProps,
            isOpen,
            selectedItem,
            openMenu,
            highlightedIndex,
            clearSelection
          } /* TODO: use InputWrapper, needs getRootProps */
        ) => (
          <div style={{ position: "relative" }}>
            {typeof defaultValue === "string" && !changed && value ? (
              <QueryRenderer
                clientID="https://github.com/kiwicom/weekendfe"
                query={graphql`
                  query PlacePickerLocationsQuery($id: String!) {
                    place(id: $id) {
                      ...PlacePickerInput_place
                    }
                  }
                `}
                variables={{ id: value }}
                environment={weekendapiEnvironment}
                onLoading={() => <Loading type="searchLoader" />}
                onResponse={({ place }) => (
                  <PlacePickerInput
                    label={label}
                    openMenu={openMenu}
                    place={place}
                    getInputProps={getInputProps}
                    clearSelection={clearSelection}
                  />
                )}
              />
            ) : (
              // TODO: component composition?
              <InputField
                {...getInputProps({
                  // here's the interesting part
                  onFocus: openMenu
                })}
                inlineLabel
                label={label}
                suffix={
                  <ButtonLink
                    onClick={clearSelection}
                    transparent
                    iconLeft={<Close />}
                    title="Delete"
                  />
                }
              />
            )}
            {isOpen && debouncedValue ? (
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

export default PlacePicker
