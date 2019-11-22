import React, { useState } from "react"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Button from "@kiwicom/orbit-components/lib/Button"
import Badge from "@kiwicom/orbit-components/lib/Badge"

const Example = () => {
  const [fruits, setFruits] = useState(["apple"])
  const [value, setValue] = useState("pear")
  const handleInputChange = ev => {
    setValue(ev.target.value)
  }
  const addNewFruit = () => {
    setFruits(s => [...s, value])
  }
  const handleRemove = itemIndex => () => {
    setFruits(s => s.filter((val, index) => index !== itemIndex))
  }
  const handleDelete = () => {
    setFruits([])
  }
  return (
    <Stack>
      <Stack direction="row">
        <InputField
          placeholder="type fruit name"
          onChange={handleInputChange}
          value={value}
        />
        <Button onClick={addNewFruit}>Add new fruit</Button>
      </Stack>
      {fruits.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Stack key={index} direction="row" align="center">
          <Badge type="dark">{item}</Badge>
          <Button onClick={handleRemove(index)} size="small">
            Remove
          </Button>
        </Stack>
      ))}
      <Button type="critical" onClick={handleDelete}>
        Delete all
      </Button>
    </Stack>
  )
}
export default Example
