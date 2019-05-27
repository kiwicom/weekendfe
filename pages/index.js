import * as React from "react"
import { Heading } from "@kiwicom/orbit-components/"
import styled from "styled-components"
import { format } from "date-fns"
import Router from "next/router"

import ContentContainer from "../components/ContentContainer"
import Interests from "../components/Interests"
import PlacesToVisit from "../components/PlacesToVisit"
import TopPart, { defaultValues } from "../components/TopPart"

const NomadForm = styled.div`
  max-width: 816px;
`

const StyledOrigin = styled.div`
  max-width: 756px;
`

const placesToUrl = places =>
  places
    .map(([place, days]) => [place && place.code, days])
    .toString()
    .replace(/,/g, "-")

const changePlacesState = newPlaces => {
  const newUrl = {
    pathname: Router.pathname,
    query: {
      ...Router.query,
      stopovers: placesToUrl(newPlaces)
    }
  }
  // eslint-disable-next-line fp/no-mutating-methods
  Router.push(newUrl, newUrl, { shallow: true })
}

const handleOnSearchClick = selectedPlaces => {
  const values = { ...defaultValues, ...Router.query }
  const newUrl = {
    pathname: `/result`,
    query: {
      ...values,
      dateFrom: format(values.dateFrom, "YYYY-MM-DD"),
      dateTo: format(values.dateTo, "YYYY-MM-DD"),
      flyFrom:
        typeof values.flyFrom === "string"
          ? values.flyFrom
          : values.flyFrom.id,
      stopovers: placesToUrl(selectedPlaces),
      places: undefined
    }
  }
  Router.push(newUrl) // eslint-disable-line
}

const FlyForm = ({ query, places }) => (
  <ContentContainer>
    <Heading type="title1" spaceAfter="largest">
      What are you interested in?
    </Heading>
    <Interests
      defaultValue={query.interest || defaultValues.interest}
    />
    <NomadForm>
      <StyledOrigin>
        <Heading type="title1" spaceAfter="medium">
          What destinations do you want to visit?
        </Heading>
        <TopPart
          {...query}
          adults={query.adults || defaultValues.adults}
          flyFrom={query.flyFrom || defaultValues.flyFrom}
          flyTo={query.flyTo}
        />
      </StyledOrigin>
      <PlacesToVisit
        onChange={changePlacesState}
        defaultValue={places}
        onSearchClick={handleOnSearchClick}
      />
    </NomadForm>
  </ContentContainer>
)

const getPlaceFromString = val =>
  typeof val === "string"
    ? { name: `[${val}]`, code: val, id: val }
    : val

// Mexico,2,5,Poland,1,3 => [["Mexico", defaultDays]]
const UrlToPlaces = url => {
  if (!url) return undefined
  const items = url.split("-")
  const result = []
  // eslint-disable-next-line
  for (let i = 0; i < items.length; i += 3)
    // eslint-disable-next-line fp/no-mutating-methods
    result.push([
      getPlaceFromString(items[i]),
      [items[i + 1], items[i + 2]]
    ])
  return result
}

FlyForm.getInitialProps = async ({ query }) => {
  const places = UrlToPlaces(query.stopovers) || defaultValues.places
  return { query, places }
}

export default FlyForm
