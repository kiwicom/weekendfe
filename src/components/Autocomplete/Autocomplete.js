// @flow

import * as React from "react"
import { Stack, Tile } from "@kiwicom/orbit-components"

type Props = {|
  search: string,
|}

const Autocomplete = ({ search }: Props) => {
  return (
    <Stack>
      <Tile title={search} />
    </Stack>
  )
}

export default Autocomplete
