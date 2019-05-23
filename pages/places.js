import { useState } from "react"
import { graphql, QueryRenderer } from "@kiwicom/relay"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Button from "@kiwicom/orbit-components/lib/Button"
import Share from "@kiwicom/orbit-components/lib/icons/Share"
import Kiwicom from "@kiwicom/orbit-components/lib/icons/Kiwicom"
import { StyledCardSectionContent } from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent"
import styled, { css } from "styled-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import dynamic from "next/dynamic"
import Portal from "@kiwicom/orbit-components/lib/Portal"
import Modal from "@kiwicom/orbit-components/lib/Modal"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"
import { Alert } from "@kiwicom/orbit-components/"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"

import { weekendapiEnvironment } from "../lib/enviroment"
import PlaceCard from "../components/PlaceCard"
import Footer from "../components/Footer"
import ShareModal from "../components/ShareModal"
import NavBar from "../components/NavBar"
import Timeline from "../components/Timeline"
import MapLoading from "../components/MapLoading"

const Places = styled.div`
  display: block;
  flex: 1 1 100%;
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 180px);
  max-height: 100%;
  overflow-x: auto;
  padding: ${({ theme }) =>
    `${theme.orbit.spaceXXLarge} ${theme.orbit.spaceMedium} 90px ${
      theme.orbit.spaceMedium
    }`};

  ${StyledCardSectionContent} {
    margin: 0 -24px;
    padding-top: 0;
  }

  ${mq.desktop(css`
    width: 70%;
  `)}
`

Places.defaultProps = {
  theme: defaultTheme
}

const Map = dynamic(() => import("./../components/Map"), {
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

function ErrorModal() {
  return (
    <Portal element="modals">
      <Modal>
        <ModalSection>
          <Alert type="critical" title="Something went wrong.">
            The map could not be loaded.
            <br />
            Please reload the page.
          </Alert>
        </ModalSection>
      </Modal>
    </Portal>
  )
}

const renderQueryRendererResponse = ({
  rendererProps,
  query,
  cityIndex,
  setCityIndex,
  isVisibleShareModal,
  setVisibleShareModal
}) => {
  const trip = rendererProps.item.route[cityIndex]
  const { destination } = trip

  const places = rendererProps.item.route.map(
    route => route.destination
  )

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
              {/*
                <Button
                  type="secondary"
                  iconLeft={<ChevronLeft />}
                  onClick={}
                >
                  Previous Step
                </Button>
              */}
              <Button
                href={`https://www.kiwi.com/en/booking?token=${
                  query.bookingToken
                }`}
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

const PlacesPage = ({ query }) => {
  const [cityIndex, setCityIndex] = useState(0)

  const [isVisibleShareModal, setVisibleShareModal] = useState(false)

  return (
    <QueryRenderer
      clientID="https://github.com/kiwicom/weekendfe"
      query={graphql`
        query placesQuery(
          $interest: String!
          $bookingToken: String!
        ) {
          item(interest: $interest, bookingToken: $bookingToken) {
            price
            route {
              ...Map_places
              ...PlaceCard_places
              destination {
                city
                country
              }
            }
          }
        }
      `}
      variables={{
        interest: query.interest,
        bookingToken: query.bookingToken
      }}
      environment={weekendapiEnvironment}
      onLoading={() => <MapLoading text="Loading" />}
      onSystemError={() => <ErrorModal />}
      onResponse={rendererProps =>
        renderQueryRendererResponse({
          rendererProps,
          query,
          cityIndex,
          setCityIndex,
          isVisibleShareModal,
          setVisibleShareModal
        })
      }
    />
  )
}

// enable passing query to main component
PlacesPage.getInitialProps = async ({ query }) => ({ query })

export default PlacesPage
