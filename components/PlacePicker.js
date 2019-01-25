import * as React from "react"
import styled from "styled-components"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Close from "@kiwicom/orbit-components/lib/icons/Close"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import Downshift from "downshift"
import matchSorter from "match-sorter"

import Query from "./query"
import countriesQuery from "../queries/countries.gql"
import ListChoice from "./ListChoice"

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

const Div = styled.div`
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.orbit.paletteCloudLight
      : theme.orbit.paletteWhite};
`

Div.defaultProps = {
  theme: defaultTheme
}

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
        openMenu,
        highlightedIndex,
        clearSelection
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
            suffix={
              <ButtonLink
                onClick={clearSelection}
                transparent
                iconLeft={<Close />}
              />
            }
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
                      <ListChoice
                        key={name}
                        title={name}
                        selected={highlightedIndex === index}
                        {...getItemProps({
                          item: name,
                          index
                        })}
                      />
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
