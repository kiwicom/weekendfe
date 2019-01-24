import { useRef, useState } from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import Button from "@kiwicom/orbit-components/lib/Button"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Minus from "@kiwicom/orbit-components/lib/icons/Minus"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Passengers from "@kiwicom/orbit-components/lib/icons/Passengers"
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown"
import ChevronUp from "@kiwicom/orbit-components/lib/icons/ChevronUp"

import useOnClickOutside from "./useOnClickOutside"

const Popover = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  top: calc(100% + ${({ theme }) => theme.orbit.spaceXXXSmall});
  z-index: 10;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
`

Popover.defaultProps = {
  theme: defaultTheme
}

const StyledStepper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;

  > button {
    flex-shrink: 0;
  }
`

const StyledStepperInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0;
  border: 0;
  font-size: ${({ theme }) => theme.orbit.fontSizeInputNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`

StyledStepperInput.defaultProps = {
  theme: defaultTheme
}

const Stepper = ({
  step = 1,
  defaultValue = 1,
  min = 1,
  max = 9,
  onChange
}) => {
  const value = Number(defaultValue)
  const ref = useRef()
  const [count, setCount] = useState(value <= max ? value : max)
  const [isOpen, setVisibility] = useState(false)

  useOnClickOutside(ref, () => setVisibility(false))

  const incrementCounter = () => {
    const newValue = Number(count + step)
    if (newValue >= +max ? min : newValue) {
      setCount(newValue)
      if (onChange) onChange(newValue)
    }
  }

  const decrementCounter = () => {
    const newValue = Number(count - step)
    if (newValue <= +min ? min : newValue) {
      setCount(newValue)
      if (onChange) onChange(newValue)
    }
  }

  return (
    <StyledStepper ref={ref}>
      <ButtonLink
        transparent
        type="secondary"
        size="small"
        iconLeft={<Passengers />}
        iconRight={isOpen ? <ChevronUp /> : <ChevronDown />}
        onClick={() => setVisibility(true)}
      >
        {count} {count <= 1 ? "adult" : "adults"}
      </ButtonLink>
      {isOpen && (
        <Popover>
          <Button
            disabled={count <= +min}
            iconLeft={<Minus />}
            type="secondary"
            size="small"
            onClick={() => decrementCounter()}
          />
          <StyledStepperInput
            type="text"
            value={count || 0}
            min={min}
            max={max}
            readOnly
          />
          <Button
            disabled={count >= +max}
            iconLeft={<Plus />}
            type="secondary"
            size="small"
            onClick={() => incrementCounter()}
          />
        </Popover>
      )}
    </StyledStepper>
  )
}

export default Stepper
