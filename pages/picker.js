import * as React from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"

import LocationPicker from "../components/LocationPicker"

const App = () => (
  <>
    <Heading>LocationPicker</Heading>
    <LocationPicker
      value={null}
      label="From"
      onChange={() => console.log("bur")}
    />
  </>
)

export default App
