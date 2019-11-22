import React, { createContext } from "react"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Badge from "@kiwicom/orbit-components/lib/Badge"

const defaultFruit = [
  { name: "apple", count: 10 },
  { name: "pear", count: 5 }
]

const FruitContext = createContext(defaultFruit)

const withFruit = Component => props => (
  <FruitContext.Consumer>
    {fruit => <Component {...props} fruit={fruit} />}
  </FruitContext.Consumer>
)

const Example = ({ fruit }) => {
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
export default withFruit(Example)
