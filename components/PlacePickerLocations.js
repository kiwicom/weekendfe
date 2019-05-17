import React, { useState } from "react"
import { graphql, QueryRenderer } from "@kiwicom/relay"
import styled from "styled-components"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Close from "@kiwicom/orbit-components/lib/icons/Close"
import Downshift from "downshift"

import { weekendapiEnvironment } from "../lib/enviroment"
import useDebounce from "./useDebounce"
import Results from "./ResultsList"

const StyledPlacePicker = styled.div`
  width: 100%;
`

const renderQueryRendererResponse = ({
  label,
  openMenu,
  renderProps,
  getInputProps,
  clearSelection
}) => (
  <InputField
    {...getInputProps({
      // here's the interesting part
      value: renderProps.place.name,
      onFocus: openMenu
    })}
    inlineLabel
    label={label}
    suffix={
      <ButtonLink
        onClick={clearSelection}
        transparent
        iconLeft={<Close />}
      />
    }
  />
)

const PlacePicker = ({
  defaultValue,
  label = "Via",
  onChange = () => {}
}) => {
  const [value, setValue] = useState(defaultValue)
  const [changed, setChanged] = useState(false)
  const debouncedValue = useDebounce(value, 150)

  return (
    <StyledPlacePicker>
      <Downshift
        itemToString={item => (item ? item.name : "")}
        initialSelectedItem={defaultValue}
        onStateChange={({ inputValue }) => {
          if (inputValue) {
            setValue(inputValue)
            setChanged(true)
          }
        }}
        onChange={onChange}
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
                      id
                      code
                      name
                    }
                  }
                `}
                variables={{ id: value }}
                environment={weekendapiEnvironment}
                onResponse={renderProps =>
                  renderQueryRendererResponse({
                    label,
                    openMenu,
                    renderProps,
                    getInputProps,
                    clearSelection
                  })
                }
              />
            ) : (
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
