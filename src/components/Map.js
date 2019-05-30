import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { graphql, createFragmentContainer } from "@kiwicom/relay"
import styled, { ThemeProvider } from "styled-components"
import Text from "@kiwicom/orbit-components/lib/Text"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"
import { getTokens } from "@kiwicom/orbit-components"
import getConfig from "next/config"

import RatingStars from "./RatingStars"

const {
  publicRuntimeConfig: { mapToken }
} = getConfig()

mapboxgl.accessToken = mapToken || ""

const MapWrapper = styled.div`
  position: absolute;
  top: 90px;
  display: block;
  height: calc(100% - 180px);
  width: 66%;
`

const StyledMarker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.orbit.paletteInkNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  cursor: pointer;
  position: relative;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};

  :after {
    content: " ";
    display: block;
    position: absolute;
    bottom: -8px;
    left: calc(50% - 4px);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid
      ${({ theme }) => theme.orbit.paletteInkNormal};
  }
`

StyledMarker.defaultProps = {
  theme: defaultTheme
}

const StyledImage = styled.div`
  display: block;
  width: 51px;
  height: 51px;
  background-image: ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: ${({ theme }) =>
    theme.orbit.borderRadiusNormal};
  border-bottom-left-radius: ${({ theme }) =>
    theme.orbit.borderRadiusNormal};
`

StyledImage.defaultProps = {
  theme: defaultTheme
}

const StyledText = styled.div`
  display: block;
  width: 100%;
  padding: 8px;
`

function Map({ places }) {
  const mapRef = useRef(null)
  const [mapObject, setMapObject] = useState()

  useEffect(() => {
    setMapObject(
      new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/streets-v9"
      })
    )
  }, [])

  useEffect(() => {
    if (!mapObject) {
      return null
    }

    const markers = places.interests.map(place => {
        const el = document.createElement("div") // eslint-disable-line
      el.className = "marker"
      const marker = new mapboxgl.Marker(el)
      marker
        .setLngLat([place.coords.lon, place.coords.lat])
        .addTo(mapObject)
      setTimeout(() => {
        ReactDOM.render(
          <ThemeProvider theme={{ orbit: getTokens() }}>
            <StyledMarker>
              <StyledImage bg={place.img} />
              <StyledText>
                <Text type="white">{place.name}</Text>
                <RatingStars rating={place.score} />
              </StyledText>
            </StyledMarker>
          </ThemeProvider>,
          el
        )
      })
      return marker
    })

    const bounds = new mapboxgl.LngLatBounds()

    places.interests.forEach(place => {
      bounds.extend([place.coords.lon, place.coords.lat])
    })

    mapObject.fitBounds(bounds, {
      padding: { top: 100, bottom: 100, left: 100, right: 100 }
    })

    return () => {
      markers.forEach(marker => {
        marker.remove()
      })
    }
  }, [mapObject, places.interests])

  return <MapWrapper ref={mapRef} />
}

export default createFragmentContainer(Map, {
  places: graphql`
    fragment Map_places on Route {
      interests {
        name
        coords {
          lat
          lon
        }
        img
        score
      }
    }
  `
})
