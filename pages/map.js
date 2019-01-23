import React, { useState } from "react"
import dynamic from "next/dynamic"
import Tag from "@kiwicom/orbit-components/lib/Tag"
import { Query } from "react-apollo"
import styled from "styled-components"
import Loading from "@kiwicom/orbit-components/lib/Loading"
import Portal from "@kiwicom/orbit-components/lib/Portal"
import Modal from "@kiwicom/orbit-components/lib/Modal"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Button from "@kiwicom/orbit-components/lib/Button"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Share from "@kiwicom/orbit-components/lib/icons/Share"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import List from "@kiwicom/orbit-components/lib/icons/List"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

import interestsQuery from "../queries/interests.gql"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
`

const TagTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 10;
`

TagTimeline.defaultProps = {
  theme: defaultTheme
}

const Line = styled.div`
  display: block;
  position: absolute;
  height: 2px;
  width: 96%;
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  z-index: 9;
`

Line.defaultProps = {
  theme: defaultTheme
}

const DynamicMap = dynamic(() => import("./../components/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const MapPage = function() {
  const [searchParams, setSearchParams] = useState({
    city: "Brno",
    country: "CZ"
  })
  const search = { ...searchParams, interests: "drinks" }
  return (
    <div>
      <Query
        query={interestsQuery}
        variables={search}
        context={{ uri: "https://weekend-api.now.sh/" }}
      >
        {({ loading, error, data }) => (
          <>
            {loading ? (
              <LoadingContainer>
                <Loading
                  loading
                  text={`Loading locations in ${search.city}`}
                />
              </LoadingContainer>
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
            <DynamicMap places={data.interests} />
          </>
        )}
      </Query>

      <NavBar>
        <TagTimeline>
          <Tag
            onClick={() =>
              setSearchParams({ city: "Brno", country: "CZ" })
            }
          >
            Brno
          </Tag>
          <Tag
            onClick={() =>
              setSearchParams({ city: "Bratislava", country: "SK" })
            }
          >
            Bratislava
          </Tag>
          <Tag
            onClick={() =>
              setSearchParams({ city: "Dubai", country: "AE" })
            }
          >
            Dubai
          </Tag>
          <Tag
            onClick={() =>
              setSearchParams({ city: "Košice", country: "SK" })
            }
          >
            Košice
          </Tag>
        </TagTimeline>
        <Line />
      </NavBar>
      <Footer
        leftActions={
          <ButtonLink type="secondary" icon={<Share />}>
            Share
          </ButtonLink>
        }
        rightActions={
          <Stack direction="row" justify="end" shrink>
            <Button type="secondary" iconLeft={<ChevronLeft />}>
              Show flights
            </Button>
            <Button iconLeft={<List />}>Show places</Button>
          </Stack>
        }
      />
    </div>
  )
}

export default MapPage
