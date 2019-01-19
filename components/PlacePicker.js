import * as React from "react"
import { Query } from "react-apollo"
import styled, { css } from "styled-components"
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice"
import City from "@kiwicom/orbit-components/lib/icons/City"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Loading from "@kiwicom/orbit-components/lib/Loading"
import Downshift from "downshift"
import matchSorter from "match-sorter"

import countriesQuery from "./countries.gql"

const Item = ({ isActive, isSelected, children }) => (
  <div
    style={{
      backgroundColor: isActive ? "lightgray" : "white",
      fontWeight: isSelected ? "bold" : "normal"
    }}
  >
    {children}
  </div>
)

const StyledPlacePicker = styled.div`
  width: 100%;
`

const InputWrapper = styled.div`
  position: relative;
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

const PlacePicker = props => (
  <StyledPlacePicker>
    <Downshift
      itemToString={item => (item ? item.value : "")}
      inputValue={props.inputValue}
      onStateChange={props.onStateChange}
      onChange={props.onChange}
      setInputValue={props.setInputValue}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        openMenu,
        clearSelection
      }) => (
        /* TODO: use InputWrapper, needs getRootProps */
        <div style={{ position: "relative" }}>
          <InputField
            {...getInputProps({
              // here's the interesting part
              onFocus: openMenu,
              value: selectedItem
            })}
            onChange={e => {
              if (e.target.value === "") {
                clearSelection()
              }
            }}
            inlineLabel
            label={props.label || "Via"}
          />
          {isOpen ? (
            <ResultsList>
              <Query
                query={countriesQuery}
                variables={{
                  inputValue
                }}
              >
                {({
                  loading,
                  error,
                  data: { countries = [] } = {}
                }) => {
                  if (loading)
                    return <Loading loading type="boxLoader" />
                  if (error)
                    return (
                      <Alert type="critical" title="Error!">
                        ${error.message}
                      </Alert>
                    )

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
                  return filtered.slice(0, 20).map(({ name }) => (
                    <div
                      {...getItemProps({
                        item: name
                      })}
                    >
                      <ListChoice
                        key={name}
                        icon={<City />}
                        selectable
                        selected={selectedItem === name}
                        title={name}
                        {...getItemProps({
                          item: name
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
