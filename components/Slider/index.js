import * as React from "react"
import styled, { css } from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import { Slider, Rail, Handles, Tracks } from "react-compound-slider"

import Track from "./Track"
import Handle from "./Handle"
import convertValues from "./convertValues"

const StyledSlider = styled.div`
  position: absolute;
  top: ${({ theme }) =>
    `calc(${theme.orbit.heightInputNormal} + ${
      theme.orbit.spaceXXSmall
    })`};
  z-index: 999;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 200%;
  right: 0;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  box-sizing: border-box;
  overflow: hidden;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

  ${mq.mediumMobile(css`
    width: 100%;
  `)};
`

StyledSlider.defaultProps = {
  theme: defaultTheme
}

const StyledRail = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
`

StyledRail.defaultProps = {
  theme: defaultTheme
}

const StyledSliderWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  top: 16px;
`

const StyledSliderInput = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

class SliderComponent extends React.Component {
  constructor(props) {
    super(props)
    const { defaultValues = [1, 3] } = this.props
    this.state = {
      domain: [1, 31],
      values: defaultValues
    }
  }

  handleChange = values => {
    const { onChange } = this.props
    this.setState({ values })
    if (onChange) {
      onChange(values[0], values[1])
    }
  }

  render() {
    const {
      state: { domain, values }
    } = this
    const { isOpen, onFocus, openRef } = this.props
    return (
      <StyledSliderInput>
        <InputField
          inlineLabel
          label="Length"
          onFocus={onFocus}
          value={convertValues(values)}
          readOnly
        />
        {isOpen && (
          <StyledSlider ref={openRef}>
            <Stack>
              <Heading type="title4">
                Stay {convertValues(values)}
              </Heading>
              <StyledSliderWrapper>
                <Slider
                  step={1}
                  domain={domain}
                  onChange={this.handleChange}
                  values={values}
                >
                  <Rail>
                    {({ getRailProps }) => (
                      <StyledRail {...getRailProps()} />
                    )}
                  </Rail>
                  <Handles>
                    {({ handles, getHandleProps }) => (
                      <>
                        {handles.map(handle => (
                          <Handle
                            key={handle.id}
                            handle={handle}
                            domain={domain}
                            getHandleProps={getHandleProps}
                          />
                        ))}
                      </>
                    )}
                  </Handles>
                  <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                      <>
                        {tracks.map(({ id, source, target }) => (
                          <Track
                            key={id}
                            source={source}
                            target={target}
                            getTrackProps={getTrackProps}
                          />
                        ))}
                      </>
                    )}
                  </Tracks>
                </Slider>
              </StyledSliderWrapper>
            </Stack>
          </StyledSlider>
        )}
      </StyledSliderInput>
    )
  }
}

export default SliderComponent
