import { useState } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Button from "@kiwicom/orbit-components/lib/Button"
import Share from "@kiwicom/orbit-components/lib/icons/Share"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import Kiwicom from "@kiwicom/orbit-components/lib/icons/Kiwicom"
import { StyledCardSectionContent } from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent"
import styled, { css } from "styled-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import dynamic from "next/dynamic"
import Portal from "@kiwicom/orbit-components/lib/Portal"
import Modal from "@kiwicom/orbit-components/lib/Modal"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"
import { Alert } from "@kiwicom/orbit-components/"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

import PlaceCard from "../components/PlaceCard"
import Footer from "../components/Footer"
import ShareModal from "../components/ShareModal"
import interestsQuery from "../queries/interests.gql"
import NavBar from "../components/NavBar"
import Timeline from "../components/Timeline"
import MapLoading from "../components/MapLoading"
import Query from "../components/query"

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

const DynamicMap = dynamic(() => import("./../components/Map"), {
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

const DownShift = () => {
  const [searchParams, setSearchParams] = useState({
    city: "Brno",
    country: "CZ"
  })
  const search = { ...searchParams, interests: "drinks" }

  const [isVisibleShareModal, setVisibleShareModal] = useState(false)
  return (
    <PlacesContainer>
      <NavBar>
        <Timeline
          onClick={setSearchParams}
          places={[
            { city: "Brno", country: "CZ" },
            { city: "Bratislava", country: "SK" },
            { city: "Dubai", country: "AE" },
            { city: "Košice", country: "SK" }
          ]}
          selected="Brno"
        />
      </NavBar>
      <Stack direction="row">
        <LeftSide>
          <Query
            query={interestsQuery}
            variables={search}
            context={{ uri: "https://weekend-api.now.sh/" }}
          >
            {({ loading, error, data }) => (
              <>
                {loading ? (
                  <MapLoading
                    text={`Loading locations in ${search.city}`}
                  />
                ) : null}
                {error ? (
                  <Portal element="modals">
                    <Modal>
                      <ModalSection>
                        <Alert
                          type="critical"
                          title="Something went wrong."
                        >
                          The map could not be loaded.
                          <br />
                          Please reload the page.
                        </Alert>
                      </ModalSection>
                    </Modal>
                  </Portal>
                ) : null}
                {data.interests && (
                  <DynamicMap places={data.interests} />
                )}
              </>
            )}
          </Query>
        </LeftSide>
        <Places>
          <Heading type="title2" spaceAfter="largest">
            Places to visit in Barcelona
          </Heading>
          <PlaceCard
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
              <Button type="secondary" iconLeft={<ChevronLeft />}>
                Previous Step
              </Button>
              <Button iconLeft={<Kiwicom />}>Book the flight</Button>
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

export default DownShift
