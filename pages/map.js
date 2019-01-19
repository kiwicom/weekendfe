import React, { useState } from "react"
import dynamic from "next/dynamic"
import Button from "@kiwicom/orbit-components/lib/Button"
import { Query } from "react-apollo"

import interestsQuery from "../components/interests.gql"

const DynamicMap = dynamic(() => import("./../components/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const MapPage = function() {
  const [searchParams, setSearchParams] = useState({ city: "Brno", country: "CZ" })
  const search = { ...searchParams, interests: "drinks" }
  console.log(search)
  return (
    <div>
      <Query query={interestsQuery} variables={search}>
        {({ loading, error, data }) => {
          if (loading) {
            return "..."
          }
          if (error) {
            return "Err"
          }
          return <DynamicMap places={data.interests} />
        }}
      </Query>

      <Button onClick={() => setSearchParams({ city: "Brno", country: "CZ" })}>Brno</Button>
      <Button onClick={() => setSearchParams({ city: "Prague", country: "CZ" })}>Prague</Button>
      <Button onClick={() => setSearchParams({ city: "Dubai", country: "AE" })}>Dubai</Button>
      <Button onClick={() => setSearchParams({ city: "Košice", country: "SK" })}>Košice</Button>
    </div>
  )
}

export default MapPage
