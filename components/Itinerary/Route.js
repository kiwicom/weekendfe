import * as React from "react"
import { graphql, createFragmentContainer } from "@kiwicom/relay"
import styled, { ThemeProvider } from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import Hide from "@kiwicom/orbit-components/lib/Hide"
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo"
import FlightDirect from "@kiwicom/orbit-components/lib/icons/FlightDirect"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"
import {
  format,
  differenceInHours,
  differenceInMinutes
} from "date-fns"
import { getTokens } from "@kiwicom/orbit-components"

const StyledNights = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
`

const StyledLine = styled.div`
  display: block;
  height: 1px;
  width: 150px;
  background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
`

StyledNights.defaultProps = {
  theme: defaultTheme
}

const getCarrierFromParts = parts =>
  parts.map(part => ({
    code: part.carrier
  }))

const Route = ({ flight, nights }) => {
  const { parts, from, to } = flight
  const carriers = getCarrierFromParts(parts)

  const departureTimeLocal = new Date(from.timeLocal * 1000)
  const arrivalTimeLocal = new Date(to.timeLocal * 1000)
  const departureTime = format(departureTimeLocal, "HH:mm")
  const departureArrival = format(arrivalTimeLocal, "HH:mm")

  const hours = differenceInHours(
    arrivalTimeLocal,
    departureTimeLocal
  )

  const minutes =
    differenceInMinutes(arrivalTimeLocal, departureTimeLocal) -
    hours * 60

  return (
    <Stack direction="row" shrink>
      <Stack direction="column" shrink>
        <Stack direction="row" shrink>
          <Stack
            direction="column"
            grow={false}
            basis="150px"
            spacing="comfy"
          >
            <Stack direction="row" align="center">
              <ThemeProvider theme={{ orbit: getTokens() }}>
                <CarrierLogo carriers={carriers} />
              </ThemeProvider>
              <Text type="secondary" size="small">
                {carriers.map(carrier => carrier.code).join(", ")}
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            shrink
            basis="250px"
            spacing="compact"
          >
            <Stack direction="column" spacing="extraTight">
              <Text weight="bold">{`${departureTime} - ${departureArrival}`}</Text>
              <Text size="small">
                {format(departureTimeLocal, "ddd D MMM")}
              </Text>
            </Stack>
          </Stack>
          <Stack direction="column" spacing="extraTight" shrink>
            <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
              <Text>
                {hours && `${hours}h`} {minutes && `${minutes}m`}
              </Text>
              <Stack direction="row" align="center" spacing="tight">
                <Text size="small" type="secondary">
                  {from.city} {from.iata}
                </Text>
                <FlightDirect color="secondary" size="small" />
                <Text size="small" type="secondary">
                  {to.city} {to.iata}
                </Text>
              </Stack>
            </Hide>
          </Stack>
        </Stack>
        {nights && (
          <Stack direction="row" shrink grow={false} align="center">
            <StyledLine />
            <StyledNights>
              <Text type="secondary" size="small">
                {nights <= 1
                  ? `${nights} night `
                  : `${nights} nights `}
                in {to.city}
              </Text>
            </StyledNights>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default createFragmentContainer(Route, {
  flight: graphql`
    fragment Route_flight on Route {
      from {
        city
        iata
        timeLocal
      }
      to {
        city
        iata
        timeLocal
      }
      parts {
        carrier
      }
    }
  `
})
