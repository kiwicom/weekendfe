import * as React from "react"
import { graphql, createFragmentContainer } from "@adeira/relay"
import styled from "styled-components"
import { Label } from "@kiwicom/orbit-components/lib/Checkbox"
import { Text, Stack } from "@kiwicom/orbit-components"
import { StyledButtonLink } from "@kiwicom/orbit-components/lib/ButtonLink"

const StyledPlaceCard = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  padding: ${({ theme }) =>
    `${theme.orbit.spaceMedium} ${theme.orbit.spaceLarge}`};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-bottom: 1px solid
    ${({ theme }) => theme.orbit.paletteCloudLight};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowAction};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

  ${Label} {
    width: auto;
    align-self: flex-start;
    padding-right: ${({ theme }) => theme.orbit.spaceXSmall};
  }

  ${StyledButtonLink} {
    flex-shrink: 0;
  }
`

const PlaceCard = ({ places }) => (
  <Stack direction="column">
    {places.interests.map(place => (
      <StyledPlaceCard key={place.name + place.address}>
        {/* <Checkbox checked /> */}
        <Stack spacing="extraTight">
          <Text weight="bold">{place.name}</Text>
          <Text type="secondary" element="div">
            {place.address}
          </Text>
        </Stack>
      </StyledPlaceCard>
    ))}
  </Stack>
)

export default createFragmentContainer(PlaceCard, {
  places: graphql`
    fragment PlaceCard_places on Route {
      interests {
        name
        address
      }
    }
  `
})
