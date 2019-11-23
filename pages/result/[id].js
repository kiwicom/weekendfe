// @flow

import * as React from "react"
import { useRouter } from "next/router"

import LocationDetail from "../../src/components/LocationDetail/LocationDetail"

const ResultPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <LocationDetail locationId={id} />
}

export default ResultPage
