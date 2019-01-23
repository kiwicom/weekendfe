import * as React from "react"
import styled from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import Hide from "@kiwicom/orbit-components/lib/Hide"
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo"
import FlightDirect from "@kiwicom/orbit-components/lib/icons/FlightDirect"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

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

const Route = ({
  arrivalTime,
  arrivalTo,
  carriers,
  departureDate,
  departureFrom,
  departureTime,
  flightTime,
  nights
}) => (
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
              {carriers.map(carrier => carrier.name).join(", ")}
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
              {departureTime} - {arrivalTime}
            </Text>
            <Text size="small">{departureDate}</Text>
          </Stack>
        </Stack>
        <Stack direction="column" spacing="extraTight" shrink>
          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
            <Text>{flightTime}</Text>
            <Stack direction="row" align="center" spacing="tight">
              <Text size="small" type="secondary">
                {departureFrom}
              </Text>
              <FlightDirect color="secondary" size="small" />
              <Text size="small" type="secondary">
                {arrivalTo}
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
              {nights} in {arrivalTo}
            </Text>
          </StyledNights>
        </Stack>
      )}
    </Stack>
  </Stack>
)

export default Route
