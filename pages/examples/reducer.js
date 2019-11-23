import React, { useState, useReducer } from "react"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Button from "@kiwicom/orbit-components/lib/Button"
import Badge from "@kiwicom/orbit-components/lib/Badge"

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "remove":
      return state.filter((_, index) => index !== action.payload)
    case "delete":
      return []
    default:
      return ["apple"]
  }
}

const Example = () => {
  const [fruits, dispatch] = useReducer(reducer, ["apple"])
  const [value, setValue] = useState("pear")
  const handleInputChange = ev => {
    setValue(ev.target.value)
  }
  return (
    <Stack>
      <Stack direction="row">
        <InputField
          placeholder="type fruit name"
          onChange={handleInputChange}
          value={value}
        />
        <Button
          onClick={() => dispatch({ type: "add", payload: value })}
        >
          Add new fruit
        </Button>
      </Stack>
      {fruits.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Stack key={index} direction="row" align="center">
          <Badge type="dark">{item}</Badge>
          <Button
            size="small"
            onClick={() =>
              dispatch({ type: "remove", payload: index })
            }
          >
            Remove
          </Button>
        </Stack>
      ))}
      <Button
        type="critical"
        onClick={() => dispatch({ type: "delete" })}
      >
        Delete all
      </Button>
    </Stack>
  )
}
export default Example
