import Downshift from "downshift"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Visibility from "@kiwicom/orbit-components/lib/icons/Visibility"
import Search from "@kiwicom/orbit-components/lib/icons/Search"

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" }
]

export default () => (
  <>
    <InputField
      placeholder="My placeholder"
      prefix={<Search />}
      suffix={<ButtonLink transparent icon={<Visibility />} />}
    />
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
