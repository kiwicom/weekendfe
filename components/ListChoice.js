import * as React from "react"
import styled from "styled-components"
import Heading, {
  StyledHeading
} from "@kiwicom/orbit-components/lib/Heading"
import Checkbox, {
  Label
} from "@kiwicom/orbit-components/lib/Checkbox"
import Text from "@kiwicom/orbit-components/lib/Text"
import City from "@kiwicom/orbit-components/lib/icons/City"
import defaultTokens from "@kiwicom/orbit-components/lib/defaultTokens"
import { getSize } from "@kiwicom/orbit-components/lib/Icon"

const StyledListChoiceIcon = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 0 0 auto;
  margin-right: ${({ theme }) => theme.orbit.spaceSmall};

  svg {
    width: ${getSize("small")};
    height: ${getSize("small")};
    color: ${({ theme }) => theme.orbit.colorIconPrimary};
    transition: color ${({ theme }) => theme.orbit.durationFast}
      ease-in-out;
  }
`

StyledListChoiceIcon.defaultProps = {
  theme: defaultTokens
}

const StyledListChoice = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
  border-bottom: 1px solid
    ${({ theme }) => theme.orbit.paletteCloudNormal};
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.orbit.paletteCloudLight
      : theme.orbit.paletteWhite};
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
    ${StyledListChoiceIcon} svg {
      color: ${({ theme }) => theme.orbit.colorIconAttention};
    }
  }

  ${Label} {
    width: auto;
  }
`

StyledListChoice.defaultProps = {
  theme: defaultTokens
}

const StyledListChoiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-right: ${({ theme }) => theme.orbit.spaceSmall};

  ${StyledHeading} {
    line-height: ${({ theme }) => theme.orbit.lineHeightText};
  }
`

StyledListChoiceContent.defaultProps = {
  theme: defaultTokens
}

const ListChoice = ({
  title,
  description,
  selectable,
  onClick,
  selected,
  onMouseMove,
  onMouseDown,
  id,
  role
}) => (
  <StyledListChoice
    onClick={onClick}
    onMouseMove={onMouseMove}
    onMouseDown={onMouseDown}
    id={id}
    role={role}
    selected={selected}
  >
    <StyledListChoiceIcon>
      <City size="small" />
    </StyledListChoiceIcon>
    <StyledListChoiceContent>
      <Heading type="title4">{title}</Heading>
      {description && (
        <Text type="secondary" size="small">
          {description}
        </Text>
      )}
    </StyledListChoiceContent>
    {selectable && <Checkbox checked={selected} readOnly />}
  </StyledListChoice>
)

export default ListChoice
