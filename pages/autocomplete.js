// @flow

import * as React from "react"
import { InputField } from "@kiwicom/orbit-components"
import styled from "styled-components"

import Autocomplete from "../src/components/Autocomplete/Autocomplete"

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
    <>
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
    </>
  )
}

export default AutocompletePage
