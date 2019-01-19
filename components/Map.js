import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane"
import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

mapboxgl.accessToken =
  "pk.eyJ1IjoibWljaGFlbGtpd2kiLCJhIjoiY2pyM2FjcGUyMGU2dTQycDE3ajQ3b3B6eiJ9.iJ4UL0VhJj1xvIG3vozlrQ"

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  .marker {
    background-color: #eee;
    background-size: cover;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }
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

  useEffect(
    () => {
      if (!mapObject) {
        return null
      }

      const markers = places.map(place => {
        const el = document.createElement("div") // eslint-disable-line
        el.className = "marker"
        const marker = new mapboxgl.Marker(el)
        marker
          .setLngLat([place.coords.lon, place.coords.lat])
          .addTo(mapObject)
        setTimeout(() => {
          ReactDOM.render(
            <div>
              <Airplane />
              {place.name}
            </div>,
            el
          )
        })
        return marker
      })

      const bounds = new mapboxgl.LngLatBounds()

      places.forEach(place => {
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
    },
    [JSON.stringify(places), mapObject]
  )

  return <MapWrapper ref={mapRef} />
}

export default Map
