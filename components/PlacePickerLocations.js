import { useState } from "react"
import styled from "styled-components"
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice"
import City from "@kiwicom/orbit-components/lib/icons/City"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Downshift from "downshift"
import debounce from "lodash.debounce"

import Query from "./query"
import locationsQuery from "../queries/locations.gql"

const StyledPlacePicker = styled.div`
  width: 100%;
`

const ResultsList = styled.div`
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

const PlacePicker = ({
  defaultValue,
  onChange = () => {},
  label = "Via"
}) => {
  const [value, setValue] = useState(defaultValue)
  return (
    <StyledPlacePicker>
      <Downshift
        onStateChange={debounce(({ inputValue }) => {
          if (inputValue) {
            setValue(inputValue)
          }
        }, 50)}
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
              <ResultsList>
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
                          title={name}
                          description={
                            highlightedIndex === index
                              ? "press for select"
                              : ""
                          }
                          {...getItemProps({
                            item: name,
                            index
                          })}
                        />
                      </div>
                    ))
                  }
                </Query>
              </ResultsList>
            ) : null}
          </div>
        )}
      </Downshift>
    </StyledPlacePicker>
  )
}

export default PlacePicker
