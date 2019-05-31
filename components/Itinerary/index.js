import { graphql, createFragmentContainer } from "@kiwicom/relay"
import {
  Button,
  Card,
  Illustration,
  Hide,
  Stack,
  Text
} from "@kiwicom/orbit-components"
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection"
import { differenceInHours } from "date-fns"
import Router from "next/router"
import * as React from "react"

import Route from "./Route"

const getNights = (routes, route, routeKey) => {
  // Don't show nights count for the last route
  if (routeKey !== routes.length - 1) {
    const departureTimeLocal = route.to.timeLocal
    const arrivalTimeLocal = routes[routeKey + 1].from.timeLocal

    const hours = differenceInHours(
      new Date(arrivalTimeLocal * 1000),
      new Date(departureTimeLocal * 1000)
    )
    return Math.ceil(hours / 24)
  }
  return null
}
const Itinerary = ({ flights, interest }) => (
  <Stack direction="column" shrink spacing="loose">
    {flights.search.length ? (
      flights.search.map((flight, flightKey) => {
        const routes = flight.route
        return (
          // eslint-disable-next-line
        <Card key={flightKey}>
            <CardSection>
              <Stack
                direction="column"
                spacing="loose"
                desktop={{ spacing: "tight" }}
              >
                <Stack direction="row" align="center" spacing="comfy">
                  <Stack basis="50px" justify="center" shrink={false}>
                    <Text weight="bold" size="large">
                      {flight.price} €
                    </Text>
                  </Stack>
                  <Stack direction="column" shrink>
                    {routes.map((route, key) => {
                      const nights = getNights(routes, route, key)
                      return (
                        // eslint-disable-next-line
                      <Route flight={route} key={key} nights={nights} />
                      )
                    })}
                  </Stack>
                  <Hide
                    on={[
                      "smallMobile",
                      "mediumMobile",
                      "largeMobile"
                    ]}
                  >
                    <Stack
                      align="center"
                      justify="end"
                      shrink
                      basis="150px"
                    >
                      <Button
                        onClick={() => {
                          // eslint-disable-next-line fp/no-mutating-methods
                          Router.push({
                            pathname: "/places",
                            query: {
                              bookingToken: flight.bookingToken,
                              interest
                            }
                          })
                        }}
                      >
                        Select this flight
                      </Button>
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
                    <Button
                      onClick={() =>
                        // eslint-disable-next-line fp/no-mutating-methods
                        Router.push({
                          pathname: "/places",
                          query: {
                            bookingToken: flight.bookingToken,
                            interest
                          }
                        })
                      }
                    >
                      Select this flight
                    </Button>
                  </Hide>
                </Stack>
              </Stack>
            </CardSection>
          </Card>
        )
      })
    ) : (
      <>
        <Illustration
          size="medium"
          name="NoResults"
          dataTest="test"
          spaceAfter={null}
        />
        <Text type="secondary" element="p" size="large">
          No results, try another combination ¯\_(ツ)_/¯
        </Text>
      </>
    )}
  </Stack>
)

export default createFragmentContainer(Itinerary, {
  flights: graphql`
    fragment Itinerary_flights on Query
      @argumentDefinitions(params: { type: "SearchParams!" }) {
      search(params: $params) {
        price
        bookingToken
        route {
          ...Route_flight
          from {
            timeLocal
          }
          to {
            timeLocal
          }
        }
      }
    }
  `
})
