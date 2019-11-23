import React, { createContext, useContext } from "react"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Badge from "@kiwicom/orbit-components/lib/Badge"

const defaultFruit = [
  { name: "apple", count: 100 },
  { name: "pear", count: 5 }
]

const FruitContext = createContext(defaultFruit)

const Example = () => {
  const fruit = useContext(FruitContext)
  return (
    <Stack direction="row">
      {fruit.map(({ name, count }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Badge type="dark" key={index}>
          {name}: {count}
        </Badge>
      ))}
    </Stack>
  )
}
export default Example
