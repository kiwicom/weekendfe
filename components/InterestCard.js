import * as React from "react"
import styled, { css } from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import Radio from "@kiwicom/orbit-components/lib/Radio"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"

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
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast}
      ease-in-out,
    transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  ${mq.largeMobile(css`
    max-width: 180px;
  `)};

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
const InterestCard = ({
  title,
  icon,
  checked,
  value,
  onChange,
  onClick
}) => {
  const handleKeyDown = event => {
    if (onClick) {
      if (event.keyCode === 32) {
        onClick(value)
      }
    }
  }
  return (
    <StyledInterestCard
      onClick={() => onClick(value)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Stack direction="row" justify="between" align="center">
        <StyledIcon>{icon}</StyledIcon>
        <StyledContent>
          <Text weight="bold">{title}</Text>
        </StyledContent>
        <StyledRadio>
          <Radio
            checked={checked}
            value={value}
            name="interest"
            onChange={onChange}
            tabIndex={-1}
          />
        </StyledRadio>
      </Stack>
    </StyledInterestCard>
  )
}

export default InterestCard
