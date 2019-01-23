import * as React from "react"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Card from "@kiwicom/orbit-components/lib/Card"
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection"
import Text from "@kiwicom/orbit-components/lib/Text"
import Button from "@kiwicom/orbit-components/lib/Button"
import Hide from "@kiwicom/orbit-components/lib/Hide"

import Route from "./Route"

const Itinerary = ({ flights }) => (
  <Stack direction="column" shrink spacing="loose">
    {flights.map(flight => (
      <Card>
        <CardSection>
          <Stack
            direction="column"
            spacing="loose"
            desktop={{ spacing: "tight" }}
          >
            <Stack direction="row" align="center" spacing="comfy">
              <Stack
                basis="30px"
                justify="center"
                desktop={{ basis: "50px" }}
              >
                <Text weight="bold" size="large">
                  {flight.price} €
                </Text>
              </Stack>
              <Stack direction="column" shrink>
                {flight.routes.map(route => (
                  <Route {...route} />
                ))}
              </Stack>
              <Hide
                on={["smallMobile", "mediumMobile", "largeMobile"]}
              >
                <Stack
                  align="center"
                  justify="end"
                  shrink
                  basis="150px"
                >
                  {/* onClick => show places to select (store the ID of the flight for showing on the map) */}
                  <Button>Select this flight</Button>
                </Stack>
              </Hide>
            </Stack>
            <Stack
              justify="center"
              direction="row"
              align="center"
              shrink
            >
              <Hide on={["tablet", "desktop", "largeDesktop"]}>
                {/* onClick => show places to select (store the ID of the flight for showing on the map) */}
                <Button>Select this flight</Button>
              </Hide>
            </Stack>
          </Stack>
        </CardSection>
      </Card>
    ))}
  </Stack>
)

export default Itinerary
