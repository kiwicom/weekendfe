// @flow

import * as React from "react"
import { Stack, Tile } from "@kiwicom/orbit-components"

const Autocomplete = ({ search }) => {
  return (
    <Stack>
      <Tile title={search} />
    </Stack>
  )
}

export default Autocomplete
