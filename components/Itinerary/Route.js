import * as React from "react"
import styled from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import Hide from "@kiwicom/orbit-components/lib/Hide"
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo"
import FlightDirect from "@kiwicom/orbit-components/lib/icons/FlightDirect"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import { format } from "date-fns"

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
  parts.map(part => ({ code: part.carrier }))

const Route = props => {
  const { parts, from, to } = props
  const nights = 1
  const carriers = getCarrierFromParts(parts)
  console.log(parts)
  const timeFrom = Math.max.apply(
    null,
    parts.map(part => part.from.timeLocal)
  )
  const timeTo = Math.max.apply(
    null,
    parts.map(part => part.to.timeLocal)
  )
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
              <CarrierLogo carriers={carriers} />
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
              <Text weight="bold">
                {format(timeFrom, "HH:mm")} -{" "}
                {format(timeTo, "HH:mm")}
              </Text>
              <Text size="small">
                {format(from.timeLocal, "ddd D MMM")}
              </Text>
            </Stack>
          </Stack>
          <Stack direction="column" spacing="extraTight" shrink>
            <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
              <Text>1h 10m</Text>
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
                {nights} in Brno
              </Text>
            </StyledNights>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default Route
