import Downshift from "downshift"
import { Query } from "react-apollo"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import matchSorter from "match-sorter"

import countriesQuery from "../components/countries.gql"

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" }
]

const Item = ({ isActive, isSelected, children, ...props }) => (
  <div
    style={{
      backgroundColor: isActive ? "lightgray" : "white",
      fontWeight: isSelected ? "bold" : "normal"
    }}
    {...props}
  >
    {children}
  </div>
)

export default () => (
  <>
    <InputField
      placeholder="My placeholder"
      prefix={<Search />}
      suffix={<ButtonLink transparent icon={<Visibility />} />}
    />
    <hr />
    <Downshift
      onChange={selection => alert(`You selected ${selection}`)} // eslint-disable-line
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        openMenu
      }) => (
        <div>
          <label {...getLabelProps()}>Enter a fruit</label>
          <InputField
            {...getInputProps({
              // here's the interesting part
              onFocus: openMenu
            })}
            placeholder="My placeholder"
            prefix={<Search />}
            suffix={<ButtonLink transparent icon={<Visibility />} />}
          />
          {isOpen ? (
            <Query
              query={countriesQuery}
              variables={{
                inputValue
              }}
            >
              {({ loading, error, data: { countries = [] } = {} }) => {
                if (loading) return <Item disabled>Loading...</Item>
                if (error) return <Item disabled>Error! ${error.message}</Item>

                const filtered = !inputValue
                  ? countries
                  : matchSorter(countries, inputValue, {
                      keys: [
                        { maxRanking: matchSorter.rankings.STARTS_WITH, key: "name" },
                        { minRanking: matchSorter.rankings.EQUAL, key: "code" }
                      ]
                    })
                return filtered.slice(0, 7).map(({ name, emoji }, index) => (
                  <Item
                    key={name}
                    {...getItemProps({
                      item: name,
                      index,
                      isActive: highlightedIndex === index,
                      isSelected: selectedItem === name
                    })}
                  >
                    {emoji}
                    {name}
                  </Item>
                ))
              }}
            </Query>
          ) : null}
        </div>
      )}
    </Downshift>

    <hr />
    <Downshift
      onChange={selection => alert(`You selected ${selection.value}`)} // eslint-disable-line
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        openMenu
      }) => (
        <div>
          <label {...getLabelProps()}>Enter a fruit</label>
          <InputField
            {...getInputProps({
              // here's the interesting part
              onFocus: openMenu
            })}
            placeholder="My placeholder"
            prefix={<Search />}
            suffix={<ButtonLink transparent icon={<Visibility />} />}
          />
          {isOpen ? (
            <div>
              {items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <div
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor: highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal"
                      }
                    })}
                  >
                    {item.value}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  </>
)
