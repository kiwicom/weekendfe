import React from "react"
import Button from "@kiwicom/orbit-components/lib/Button"

const Example = () => {
  const count = 2
  return (
    <Button onClick={() => console.log("increment")}>{count}</Button>
  )
}
export default Example
