// @flow

import * as React from "react"
import { Stack, InputField } from "@kiwicom/orbit-components"
import styled from "styled-components"

import Autocomplete from "../src/components/Autocomplete/Autocomplete"

const Container = styled.div`
  max-width: 800px;
  padding-top: 80px;
  position: relative;
`

const AutoCompleteWrapper = styled.div`
  border-radius: 3px;
  position: absolute;
  box-shadow: 0 4px 12px 0 rgba(23, 27, 30, 0.3);
  background-color: #fff;
  z-index: 9;
`

const AutocompletePage = () => {
  const [value, onChange] = React.useState("")

  return (
    <Stack justify="center" align="center">
      <Container>
        <InputField
          label="Search for cities:"
          placeholder="Madrid"
          inputMode="search"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <AutoCompleteWrapper>
          {value ? <Autocomplete search={value} /> : null}
        </AutoCompleteWrapper>
      </Container>
    </Stack>
  )
}

export default AutocompletePage
