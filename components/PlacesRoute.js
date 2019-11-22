import * as React from "react"
import {
  Heading,
  Stack,
  ButtonLink,
  Button
} from "@kiwicom/orbit-components"
import { graphql, createFragmentContainer } from "@adeira/relay"
import { Share, Kiwicom } from "@kiwicom/orbit-components/lib/icons"
import { StyledCardSectionContent } from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent"
import styled, { css } from "styled-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import dynamic from "next/dynamic"

import PlaceCard from "../src/components/PlaceCard"
import Footer from "../src/components/Footer"
import ShareModal from "../src/components/ShareModal"
import NavBar from "../src/components/NavBar"
import Timeline from "../src/components/Timeline"
import MapLoading from "../src/components/MapLoading"

const Places = styled.div`
  display: block;
  flex: 1 1 100%;
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 180px);
  max-height: 100%;
  overflow-x: auto;
  padding: ${({ theme }) =>
    `${theme.orbit.spaceXXLarge} ${theme.orbit.spaceMedium} 90px ${theme.orbit.spaceMedium}`};

  ${StyledCardSectionContent} {
    margin: 0 -24px;
    padding-top: 0;
  }

  ${mq.desktop(css`
    width: 70%;
  `)}
`

const Map = dynamic(() => import("../src/components/Map"), {
  loading: () => <MapLoading text="Loading..." />,
  ssr: false
})

const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const LeftSide = styled.div`
  display: none;
  visibility: hidden;
  flex-direction: column;
  flex: 1 0 66%;

  ${mq.tablet(css`
    display: flex;
    visibility: visible;
  `)}
`

const PlacesRoute = ({
  item,
  query,
  cityIndex,
  setCityIndex,
  isVisibleShareModal,
  setVisibleShareModal
}) => {
  const trip = item.route[cityIndex]
  const { destination } = trip

  const places = item.route.map(route => route.destination)

  return (
    <PlacesContainer>
      <NavBar>
        <Timeline
          onSelect={setCityIndex}
          places={places}
          selected={cityIndex}
        />
      </NavBar>
      <Stack direction="row">
        <LeftSide>
          <Map places={trip} />
        </LeftSide>
        <Places>
          <Heading type="title2" spaceAfter="largest">
            Places to visit in {destination.city}
          </Heading>
          <PlaceCard places={trip} />
        </Places>
        <Footer
          leftActions={
            <ButtonLink
              type="secondary"
              icon={<Share />}
              onClick={() => setVisibleShareModal(true)}
            >
              Share
            </ButtonLink>
          }
          rightActions={
            <Stack direction="row" justify="end" shrink>
              <Button
                href={`https://www.kiwi.com/en/booking?token=${query.bookingToken}`}
                external
                iconLeft={<Kiwicom />}
              >
                Book the flight
              </Button>
            </Stack>
          }
        />
        {isVisibleShareModal && (
          <ShareModal onClose={setVisibleShareModal} />
        )}
      </Stack>
    </PlacesContainer>
  )
}

export default createFragmentContainer(PlacesRoute, {
  item: graphql`
    fragment PlacesRoute_item on Item {
      route {
        ...Map_places
        ...PlaceCard_places
        destination {
          city
        }
      }
    }
  `
})
