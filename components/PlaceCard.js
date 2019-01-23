import * as React from "react"
import styled from "styled-components"
import Checkbox, {
  Label
} from "@kiwicom/orbit-components/lib/Checkbox"
import Text from "@kiwicom/orbit-components/lib/Text"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import ButtonLink, {
  StyledButtonLink
} from "@kiwicom/orbit-components/lib/ButtonLink"
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight"
import CardSectionContent from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent"
import CardSectionHeader from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledPlace = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge}`};
  border-bottom: 1px solid
    ${({ theme }) => theme.orbit.paletteCloudLight};

  :last-child {
    border: 0;
  }
  ${Label} {
    width: auto;
    align-self: flex-start;
    padding-right: ${({ theme }) => theme.orbit.spaceXSmall};
  }

  ${StyledButtonLink} {
    flex-shrink: 0;
  }
`

StyledPlace.defaultProps = {
  theme: defaultTheme
}

const PlaceCard = ({ city, places }) => (
  <>
    <CardSectionHeader>
      <Heading type="title3" element="h3">
        {city}
      </Heading>
    </CardSectionHeader>
    <CardSectionContent>
      {places.map(place => (
        <StyledPlace key={place.name}>
          <Checkbox checked />
          <Stack spacing="extraTight">
            <Text weight="bold">{place.name}</Text>
            <Text type="secondary" element="div">
              {place.description}{" "}
            </Text>
          </Stack>
          <ButtonLink
            type="secondary"
            size="small"
            onClick={() => console.log("open modal")}
            iconRight={<ChevronRight />}
          >
            More info
          </ButtonLink>
        </StyledPlace>
      ))}
    </CardSectionContent>
  </>
)

export default PlaceCard
