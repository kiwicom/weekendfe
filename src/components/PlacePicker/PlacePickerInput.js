import { InputField, ButtonLink } from "@kiwicom/orbit-components"
import React from "react"
import { graphql, createFragmentContainer } from "@kiwicom/relay"
import { Close } from "@kiwicom/orbit-components/lib/icons"

const PlacePickerInput = ({
  label,
  openMenu,
  place,
  getInputProps,
  clearSelection
}) => (
  <InputField
    {...getInputProps({
      // here's the interesting part
      value: place ? place.name : "",
      onFocus: openMenu
    })}
    dataTest={`picker-${label}`}
    inlineLabel
    label={label}
    suffix={
      <ButtonLink
        onClick={clearSelection}
        transparent
        iconLeft={<Close />}
        title="Remove"
      />
    }
  />
)

export default createFragmentContainer(PlacePickerInput, {
  place: graphql`
    fragment PlacePickerInput_place on Place {
      name
    }
  `
})
