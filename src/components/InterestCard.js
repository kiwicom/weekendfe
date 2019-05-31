import React from "react"
import styled from "styled-components"
import { Text } from "@kiwicom/orbit-components/"

const StyledInterestCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  // make it flex with row
  cursor: pointer;
  // use background color white
  // use basic border radius
  // use medium spacing for padding
  box-shadow: 0 2px 4px 0 rgba(23, 27, 30, 0.1);
  // replace fast duration
  transition: box-shadow 2s ease-in-out, transform 2s ease-in-out;

  // setup max-width 177px and flex-shrink 1 on largeMobile
  // https://orbit.kiwi/guidelines/media-queries/
  // CHECK THE SYNTAX PROPERLY!!!

  :hover,
  :focus {
    box-shadow: 0 4px 12px 0 rgba(23, 27, 30, 0.1);
    outline: none;
  }
  :focus {
    box-shadow: 0 4px 12px 0 rgba(23, 27, 30, 0.1),
      inset 0 0 0 2px ${({ theme }) => theme.orbit.paletteBlueNormal};
  }
  :active {
    transform: scale(0.98);
  }
`

const StyledContent = styled.div`
  width: 100%;
`

const StyledIcon = styled.div`
  display: flex;
  width: 24px;
  height: 100%;
  align-items: center;
`

const StyledRadio = styled.div`
  & input {
    width: auto;
  }
`
const InterestCard = ({ title, icon }) => (
  <StyledInterestCard tabIndex={0}>
    {/*
    You should use stacking in row, horizontally align space-between, vertically aligned to center, the container should shrink when possible
    https://orbit.kiwi/components/stack/
    */}
    {/*
      We need to hide the icon on largeMobile viewport because there is not so much space
      https://orbit.kiwi/components/hide/
    */}
    <StyledIcon>{icon}</StyledIcon>
    <StyledContent>
      <Text weight="bold">{title}</Text>
    </StyledContent>
    <StyledRadio>
      {/*
      We need to use Radio component here

      We need to hide the icon on largeMobile viewport because there is not so much space
      https://orbit.kiwi/components/hide/
    */}
    </StyledRadio>
  </StyledInterestCard>
)

export default InterestCard
