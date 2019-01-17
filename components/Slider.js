import * as React from "react"
import styled from "styled-components"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import { Slider, Rail, Handles, Tracks } from "react-compound-slider"

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 14,
  borderRadius: 7,
  cursor: "pointer",
  backgroundColor: "rgb(155,155,155)"
}

const defaultValues = [1, 3]

const StyledHandle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ percent }) => `${percent}%`};
  position: absolute;
  margin-left: -11px;
  margin-top: -6px;
  z-index: 2;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  opacity: ${({ disabled }) => disabled && "0.4"};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
`

const StyledHandleCircle = styled.div`
  flex-shrink: 0;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.orbit.paletteBlueNormal};
  top: 50%;
  left: 50%;
`

const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps
}) => (
  <StyledHandle
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    percent={percent}
    disabled={disabled}
    {...getHandleProps(id)}
  >
    <StyledHandleCircle />
  </StyledHandle>
)

const StyledTrack = styled(({ target, source, theme, ...props }) => <div {...props} />)`
  position: absolute;
  height: 2px;
  z-index: 1;
  background-color: ${({ theme }) => theme.orbit.paletteBlueNormal};
  border-radius: 2px;
  cursor: pointer;
  left: ${({ source }) => `${source.percent}%`};
  width: ${({ source, target }) => `${target.percent - source.percent}%`};
`

StyledTrack.defaultProps = {
  theme: defaultTheme
}

const Track = ({ source, target, getTrackProps, disabled }) => (
  <StyledTrack disabled={disabled} source={source} target={target} {...getTrackProps()} />
)

const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
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
`

class SliderComponent extends React.Component {
  state = {
    domain: [1, 31],
    values: defaultValues.slice(),
    reversed: false
  }

  onUpdate = update => {
    this.setState({ update })
  }

  onChange = values => {
    this.setState({ values })
  }

  render() {
    const {
      state: { domain, values, reversed }
    } = this

    return (
      <StyledSlider>
        <StyledSliderWrapper>
          <Slider
            mode={1}
            step={5}
            domain={domain}
            reversed={reversed}
            onUpdate={this.onUpdate}
            onChange={this.onChange}
            values={values}
          >
            <Rail>{({ getRailProps }) => <StyledRail {...getRailProps()} />}</Rail>
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
                    <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
                  ))}
                </>
              )}
            </Tracks>
          </Slider>
        </StyledSliderWrapper>
      </StyledSlider>
    )
  }
}

export default SliderComponent
