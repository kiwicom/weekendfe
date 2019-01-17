import * as React from "react"
import styled from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import Radio from "@kiwicom/orbit-components/lib/Radio"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledInterestCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  box-shadow: 0 2px 4px 0 rgba(23, 27, 30, 0.1);
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  :hover,
  :focus {
    box-shadow: 0 4px 12px 0 rgba(23, 27, 30, 0.1);
    outline: none;
  }
  :active {
    transform: scale(0.98);
  }
`

StyledInterestCard.defaultProps = {
  theme: defaultTheme
}

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
const InterestCard = ({ title, description, icon, checked, value }) => (
  <StyledInterestCard>
    <Stack direction="row" justify="between" align="center">
      <StyledIcon>{icon}</StyledIcon>
      <StyledContent>
        <Text weight="bold">{title}</Text>
        <Text>{description}</Text>
      </StyledContent>
      <StyledRadio>
        <Radio checked={checked} value={value} />
      </StyledRadio>
    </Stack>
  </StyledInterestCard>
)

export default InterestCard
