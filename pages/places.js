import * as React from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Button from "@kiwicom/orbit-components/lib/Button"
import Card from "@kiwicom/orbit-components/lib/Card"
import Share from "@kiwicom/orbit-components/lib/icons/Share"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import Map from "@kiwicom/orbit-components/lib/icons/Map"
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection"
import { StyledCardSectionContent } from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent"
import styled, { css } from "styled-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"

import ContentContainer from "../components/ContentContainer"
import PlaceCard from "../components/PlaceCard"
import Footer from "../components/Footer"
import Timeline from "../components/Timeline"

const Places = styled.div`
  display: block;
  width: 100%;

  ${StyledCardSectionContent} {
    margin: 0 -24px;
    padding-top: 0;
  }

  ${mq.desktop(css`
    width: 70%;
  `)}
`

const Summary = styled.div`
  display: block;
  width: 100%;

  ${mq.desktop(css`
    width: 30%;
  `)}
`

const RightButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  > * {
    margin-right: 16px;
    :last-child {
      margin: 0;
    }
  }
`

const DownShift = () => (
  <ContentContainer>
    <Stack
      direction="column"
      spacing="extraLoose"
      desktop={{ direction: "row" }}
    >
      <Places>
        <Heading type="title1" spaceAfter="largest">
          Choose places you want to visit
        </Heading>
        <Card>
          <CardSection expandable>
            <PlaceCard
              city="Barcelona"
              places={[
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                },
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                },
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                }
              ]}
            />
          </CardSection>
          <CardSection expandable>
            <PlaceCard
              city="New York"
              places={[
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                },
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                },
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                }
              ]}
            />
          </CardSection>
          <CardSection expandable>
            <PlaceCard
              city="Paris"
              places={[
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                },
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                },
                {
                  name: "Tinta Roja",
                  description: "Lorem ipsum dolor sit amet."
                }
              ]}
            />
          </CardSection>
        </Card>
      </Places>
      <Summary>
        <Heading type="title1" spaceAfter="largest">
          Summary
        </Heading>
        <Timeline
          from="London"
          departureDate="14.01.2019"
          returnDate="27.01.2019"
          to="London"
          stops={[
            {
              city: "Barcelona",
              nights: 6,
              places: [
                { name: "Tinta Roja" },
                { name: "Belushi's Barcelona" }
              ]
            },
            {
              city: "Barcelona",
              nights: 6,
              places: [
                { name: "Tinta Roja" },
                { name: "Belushi's Barcelona" }
              ]
            }
          ]}
        />
      </Summary>
    </Stack>
    <Footer>
      <ButtonLink type="secondary" icon={<Share />}>
        Share
      </ButtonLink>
      <RightButtons>
        <Button type="secondary" iconLeft={<ChevronLeft />}>
          Previous Step
        </Button>
        <Button iconLeft={<Map />}>Show on the Map</Button>
      </RightButtons>
    </Footer>
  </ContentContainer>
)

export default DownShift
