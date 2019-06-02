import React from "react"
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

class Stepper extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    count: Number(this.props.defaultValue),
    isOpen: false
  }

  handleChange = newValue => {
    const { onChange } = this.props

    if (onChange) onChange(newValue)
    this.setState({
      count: newValue
    })
  }

  render() {
    const { defaultValue, min = 1, max = 9 } = this.props
    const { count, isOpen } = this.state

    const value = Number(defaultValue)

    return (
      <StyledStepper>
        <Popover
          content={
            <OrbitStepper
              defaultValue={value}
              minValue={min}
              maxValue={max}
              onChange={this.handleChange}
            />
          }
          onClose={() =>
            this.setState({
              isOpen: false
            })
          }
          onOpen={() =>
            this.setState({
              isOpen: true
            })
          }
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
}

export default Stepper
