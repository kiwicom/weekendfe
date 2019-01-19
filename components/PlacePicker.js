import styled from "styled-components"
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice"
import City from "@kiwicom/orbit-components/lib/icons/City"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Downshift from "downshift"
import matchSorter from "match-sorter"

import Query from "./query"
import countriesQuery from "../queries/countries.gql"

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
      // itemToString={item => (item ? item : "")}
      initialInputValue={defaultValue}
      // initialSelectedItem={selectedValue}
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
                query={countriesQuery}
                variables={{
                  inputValue
                }}
                context={{
                  uri: "https://countries.trevorblades.com/"
                }}
              >
                {({ data: { countries = [] } = {} }) => {
                  const filtered = !inputValue
                    ? countries
                    : matchSorter(countries, inputValue, {
                        keys: [
                          {
                            maxRanking:
                              matchSorter.rankings.STARTS_WITH,
                            key: "name"
                          },
                          {
                            minRanking: matchSorter.rankings.EQUAL,
                            key: "code"
                          }
                        ]
                      })
                  return filtered
                    .slice(0, 20)
                    .map(({ name }, index) => (
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
                }}
              </Query>
            </ResultsList>
          ) : null}
        </div>
      )}
    </Downshift>
  </StyledPlacePicker>
)

export default PlacePicker
