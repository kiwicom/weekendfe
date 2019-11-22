import React, { useState } from "react"
import styled from "styled-components"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Popover from "@kiwicom/orbit-components/lib/Popover"
import StepperStateless from "@kiwicom/orbit-components/lib/Stepper/StepperStateless"
import Passengers from "@kiwicom/orbit-components/lib/icons/Passengers"
import ChevronUp from "@kiwicom/orbit-components/lib/icons/ChevronUp"
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown"
import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement"
import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"

const StyledStepper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`

const StyledStepperWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.orbit.spaceXSmall} ${theme.orbit.spaceXXSmall}`};
`

StyledStepperWrapper.defaultProps = {
  theme: defaultTheme
}

const Stepper = ({ onChange, defaultValue = 0, ...props }) => {
  const [value, setValue] = useState(defaultValue)
  const [isOpen, setOpen] = useState(false)

  const incrementCounter = () => {
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props

    setValue(validateIncrement({ value, maxValue, step }))
  }

  const decrementCounter = () => {
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props

    setValue(validateDecrement({ value, minValue, step }))
  }

  const handleKeyDown = ev => {
    if (ev.keyCode === 40) {
      ev.preventDefault()
      decrementCounter()
    }
    if (ev.keyCode === 38) {
      ev.preventDefault()
      incrementCounter()
    }
  }

  const {
    onBlur,
    onFocus,
    disabled,
    name,
    dataTest,
    minValue,
    maxValue,
    titleIncrement,
    titleDecrement
  } = props
  return (
    <StyledStepper>
      <Popover
        content={
          <StyledStepperWrapper>
            <StepperStateless
              disabled={disabled}
              dataTest={dataTest}
              value={value}
              name={name}
              minValue={minValue}
              maxValue={maxValue}
              onKeyDown={handleKeyDown}
              onBlur={onBlur}
              onFocus={onFocus}
              onIncrement={incrementCounter}
              onDecrement={decrementCounter}
              titleIncrement={titleIncrement}
              titleDecrement={titleDecrement}
            />
          </StyledStepperWrapper>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <ButtonLink
          type="secondary"
          size="small"
          iconLeft={<Passengers />}
          iconRight={isOpen ? <ChevronDown /> : <ChevronUp />}
        >
          {value} {value <= 1 ? "adult" : "adults"}
        </ButtonLink>
      </Popover>
    </StyledStepper>
  )
}

export default Stepper
