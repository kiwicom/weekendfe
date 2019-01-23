import * as React from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Button from "@kiwicom/orbit-components/lib/Button"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import styled from "styled-components"

import ContentContainer from "../components/ContentContainer"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"

const flights = [
  {
    price: 97,
    routes: [
      {
        carriers: [
          { code: "FR", name: "Ryanair" },
          { code: "TO", name: "Transavia France" }
        ],
        departureTime: "10:30",
        arrivalTime: "11:40",
        departureDate: "01/14/2019",
        flightTime: "1h 10m",
        departureFrom: "Budapest (BUD)",
        arrivalTo: "Warsaw (WAW)",
        nights: "6"
      },
      {
        carriers: [
          { code: "FR", name: "Ryanair" },
          { code: "TO", name: "Transavia France" }
        ],
        departureTime: "10:30",
        arrivalTime: "11:40",
        departureDate: "01/14/2019",
        flightTime: "1h 10m",
        departureFrom: "Budapest (BUD)",
        arrivalTo: "Warsaw (WAW)"
      }
    ]
  },
  {
    price: 197,
    routes: [
      {
        carriers: [
          { code: "FR", name: "Ryanair" },
          { code: "TO", name: "Transavia France" }
        ],
        departureTime: "10:30",
        arrivalTime: "11:40",
        departureDate: "01/14/2019",
        flightTime: "1h 10m",
        departureFrom: "Budapest (BUD)",
        arrivalTo: "Warsaw (WAW)",
        nights: "6"
      },
      {
        carriers: [
          { code: "FR", name: "Ryanair" },
          { code: "TO", name: "Transavia France" }
        ],
        departureTime: "10:30",
        arrivalTime: "11:40",
        departureDate: "01/14/2019",
        flightTime: "1h 10m",
        departureFrom: "Budapest (BUD)",
        arrivalTo: "Warsaw (WAW)"
      }
    ]
  }
]

const ResultsContainer = styled.div`
  max-width: 1024px;
`

const Results = () => (
  <ContentContainer>
    <ResultsContainer>
      <Stack direction="column" spacing="extraLoose">
        <Heading type="title1" spaceAfter="largest">
          Choose your flight combination
        </Heading>
        <Itinerary flights={flights} />
      </Stack>
      <Footer
        leftActions={
          <Button type="secondary" iconLeft={<ChevronLeft />}>
            Previous Step
          </Button>
        }
      />
    </ResultsContainer>
  </ContentContainer>
)

export default Results
