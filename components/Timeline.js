import * as React from "react"
import styled from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import List from "@kiwicom/orbit-components/lib/List"
import ListItem, {
  Item
} from "@kiwicom/orbit-components/lib/List/ListItem"
import LocationIcon from "@kiwicom/orbit-components/lib/icons/Location"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const Location = styled(LocationIcon)`
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
`

Location.defaultProps = {
  theme: defaultTheme
}
const StyledTimeline = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

const StyledTimelineContent = styled.div`
  width: 100%;
  display: block;
  z-index: 10;
  position: relative;

  ${Item} {
    margin-bottom: 12px;
    align-items: center;
    :last-child {
      margin-bottom: 0;
    }
  }
`

StyledTimelineContent.defaultProps = {
  theme: defaultTheme
}

const StyledTimelineLine = styled.div`
  display: block;
  position: absolute;
  z-index: 9;
  width: 2px;
  height: calc(100% - 24px);
  top: 11px;
  left: 7px;
  background-color: ${({ theme }) => theme.orbit.paletteInkLight};
`

const StyledPlaces = styled.div`
  margin-bottom: 12px;
`

const StyledDepartureReturn = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 12px;
`

const StyledStop = styled.div`
  margin-bottom: 12px;
`

const getNightsText = nights =>
  nights > 1 ? `${nights} nights` : `${nights} night`

const Timeline = ({ from, to, departureDate, returnDate, stops }) => (
  <StyledTimeline>
    <StyledTimelineContent>
      <StyledDepartureReturn>
        <List type="secondary">
          <ListItem icon={<Location />}>
            <Stack direction="row" justify="between" shrink>
              <Text type="secondary">{from}</Text>
              <Text type="secondary">{departureDate}</Text>
            </Stack>
          </ListItem>
        </List>
      </StyledDepartureReturn>
      <StyledPlaces>
        {stops.map(stop => (
          <StyledStop>
            <List type="primary">
              <ListItem icon={<Location />}>
                <Stack direction="row" justify="between" shrink>
                  <Text type="attention">{stop.city}</Text>
                  <Text type="attention">
                    {getNightsText(stop.nights)}
                  </Text>
                </Stack>
              </ListItem>
              {stop.places.map(place => (
                <ListItem>
                  <Stack align="center">
                    <Text size="small">{place.name}</Text>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </StyledStop>
        ))}
      </StyledPlaces>
      <StyledDepartureReturn>
        <List type="secondary">
          <ListItem icon={<Location />}>
            <Stack direction="row" justify="between" shrink>
              <Text type="secondary">{to}</Text>
              <Text type="secondary">{returnDate}</Text>
            </Stack>
          </ListItem>
        </List>
      </StyledDepartureReturn>
    </StyledTimelineContent>
    <StyledTimelineLine />
  </StyledTimeline>
)

export default Timeline
