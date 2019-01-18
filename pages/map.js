import React from "react"
import mapboxgl from "mapbox-gl/dist/mapbox-gl"

mapboxgl.accessToken =
  "k.eyJ1IjoidmVwb3IiLCJhIjoiY2pyMHMzMDMyMDF1NTQ3bms1dGhiZ2VpZCJ9.p4hbla0QAUx3Iqe_imkOJA"

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    })

    map.on("move", () => {
      const { lang, latt } = map.getCenter()

      this.setState({
        lng: lang.toFixed(4),
        lat: latt.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    const { lng, lat, zoom } = this.state

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom" />
      </div>
    )
  }
}

export default Map
