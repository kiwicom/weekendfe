import * as React from "react"
import styled from "styled-components"
import {
  InputField,
  Slider,
  Popover
} from "@kiwicom/orbit-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"

import convertValues from "./convertValues"

const StyledSliderInput = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

const SliderWrapper = styled.div`
  width: 300px;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
`

SliderWrapper.defaultProps = {
  theme: defaultTheme
}

const SliderComponent = ({
  isOpen,
  onFocus,
  value = [1, 3],
  onBlur,
  onChange
}) => (
  <StyledSliderInput>
    <InputField
      inlineLabel
      label="Length"
      onFocus={onFocus}
      value={convertValues(value)}
      readOnly
    />
    {isOpen && (
      <Popover
        content={
          <SliderWrapper>
            <Slider
              minValue={1}
              maxValue={31}
              step={1}
              defaultValue={value}
              onChange={onChange}
            />
          </SliderWrapper>
        }
        opened={isOpen}
        onClose={onBlur}
      />
    )}
  </StyledSliderInput>
)
export default SliderComponent
