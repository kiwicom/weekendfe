import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import mapboxgl from "mapbox-gl/dist/mapbox-gl"
import styled from "styled-components"
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane"

mapboxgl.accessToken =
  "pk.eyJ1IjoibWljaGFlbGtpd2kiLCJhIjoiY2l3aHRiN2ZqMDAycjJ6cXduNDU5djkweCJ9.XuamwcGDtyovJEMaSWtFkg"

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

function Map({ points }) {
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

      const markers = points.map(point => {
        const el = document.createElement("div") // eslint-disable-line
        el.className = "marker"
        const marker = new mapboxgl.Marker(el)
        marker.setLngLat(point.coordinates).addTo(mapObject)
        setTimeout(() => {
          ReactDOM.render(<Airplane />, el)
        })
        return marker
      })

      const bounds = new mapboxgl.LngLatBounds()

      points.forEach(point => {
        bounds.extend(point.coordinates)
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
    [JSON.stringify(points), mapObject]
  )

  return <MapWrapper ref={mapRef} />
}

export default Map
