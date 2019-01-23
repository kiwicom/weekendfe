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
}) => (
  <StyledPlacePicker>
    <Downshift
      itemToString={item => (item ? item.name : "")}
      initialSelectedItem={defaultValue}
      onChange={onChange}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        openMenu,
        highlightedIndex
      }) => (
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
                  query: inputValue
                }}
                context={{
                  uri: "https://weekend-api.now.sh"
                }}
              >
                {({ data: { locations } }) =>
                  locations.map(({ name, id, code }, index) => (
                    <div
                      {...getItemProps({
                        item: { name, id, code },
                        index
                      })}
                      key={id}
                    >
                      <ListChoice
                        key={name}
                        icon={<City />}
                        selectable
                        selected={selectedItem === name}
                        title={`${name} [${code}/${id}]`}
                        description={
                          highlightedIndex === index
                            ? "press for select"
                            : ""
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
            </ResultsList>
          ) : null}
        </div>
      )}
    </Downshift>
  </StyledPlacePicker>
)

export default PlacePicker
