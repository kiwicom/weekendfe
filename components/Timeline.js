import * as React from "react"
import styled from "styled-components"
import Button from "@kiwicom/orbit-components/lib/Button"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const TagTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 10;
`

TagTimeline.defaultProps = {
  theme: defaultTheme
}

const Line = styled.div`
  display: block;
  position: absolute;
  height: 2px;
  width: 96%;
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  z-index: 9;
`

Line.defaultProps = {
  theme: defaultTheme
}

const Timeline = ({ places, onSelect, selected }) => (
  <>
    <TagTimeline>
      {places.map((place, i) => (
        <Button
          onClick={() => onSelect(i)}
          type={i === selected ? "primary" : "secondary"}
          size="small"
          key={place.city}
        >
          {place.city}
        </Button>
      ))}
    </TagTimeline>
    <Line />
  </>
)

export default Timeline
