import React, { useState, useCallback } from "react"
import styled from "styled-components"
import {
  ButtonLink,
  Popover,
  Stepper as OrbitStepper
} from "@kiwicom/orbit-components"
import {
  Passengers,
  ChevronUp,
  ChevronDown
} from "@kiwicom/orbit-components/lib/icons"

const StyledStepper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`

const Stepper = ({
  defaultValue = 1,
  min = 1,
  max = 9,
  onChange
}) => {
  const value = Number(defaultValue)
  const [count, setCount] = useState(value)
  const [isOpen, setOpen] = useState(false)

  const handleChange = useCallback(
    newValue => {
      if (onChange) onChange(newValue)
      setCount(newValue)
    },
    [onChange]
  )

  return (
    <StyledStepper>
      <Popover
        content={
          <OrbitStepper
            defaultValue={value}
            minValue={min}
            maxValue={max}
            onChange={handleChange}
          />
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
          {count} {count <= 1 ? "adult" : "adults"}
        </ButtonLink>
      </Popover>
    </StyledStepper>
  )
}

export default Stepper
