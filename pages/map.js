import React, { useState } from "react"
import dynamic from "next/dynamic"
import Button from "@kiwicom/orbit-components/lib/Button"

const DynamicMap = dynamic(() => import("./../components/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const points = {
  a: [
    {
      coordinates: [-77.032, 38.913],
      title: "a",
      description: "aa"
    },
    {
      coordinates: [-122.414, 37.776],
      title: "b",
      description: "bb"
    },
    {
      coordinates: [-124.414, 38.776],
      title: "c",
      description: "x"
    }
  ],
  b: [
    {
      coordinates: [-129.414, 39.776],
      title: "b",
      description: "bb"
    },
    {
      coordinates: [-124.414, 38.776],
      title: "c",
      description: "x"
    }
  ]
}

const MapPage = function() {
  const [pointsId, setPointsId] = useState("a")
  return (
    <div>
      <DynamicMap points={points[pointsId]} />
      <Button onClick={() => setPointsId("a")}>A</Button>
      <Button onClick={() => setPointsId("b")}>B</Button>
    </div>
  )
}

export default MapPage
