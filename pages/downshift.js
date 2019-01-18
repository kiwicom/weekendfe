import * as React from "react"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"
import Button from "@kiwicom/orbit-components/lib/Button"
import CloseCircle from "@kiwicom/orbit-components/lib/icons/CloseCircle"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import Sightseeing from "@kiwicom/orbit-components/lib/icons/Sightseeing"
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import Search from "@kiwicom/orbit-components/lib/icons/Search"
import styled from "styled-components"

import ContentContainer from "../components/ContentContainer"
import PlacePicker from "../components/PlacePicker"
import InterestCard from "../components/InterestCard"
import DatePicker from "../components/DatePicker"
import Slider from "../components/Slider"

const NomadForm = styled.div`
  max-width: 696px;
`

const StyledOrigin = styled.div`
  max-width: 640px;
`

const StyledButtons = styled.div`
  max-width: 640px;
`
class DownShift extends React.Component {
  state = { selectedDate: null, datePickerOpened: false, placePickerValue: "" }

  handleOnDateSelected = ({ selected, selectable, date }) => {
    this.setState({ selectedDate: date })
  }

  openDatePicker = () => {
    this.setState({ datePickerOpened: true })
  }

  closeDatePicker = () => {
    this.setState({ datePickerOpened: false })
  }

  handleInputValue = inputValue => {
    this.setState({ placePickerValue: inputValue })
  }

  openSlider = () => {
    this.setState({ isOpenSlider: true })
  }

  render() {
    const { selectedDate, datePickerOpened, placePickerValue, isOpenSlider } = this.state
    return (
      <>
        <ContentContainer>
          <Heading type="title1" spaceAfter="largest">
            What are you interested in?
          </Heading>
          <Stack
            direction="column"
            spacing="natural"
            spaceAfter="largest"
            desktop={{ direction: "row", spacing: "extraLoose" }}
          >
            <InterestCard
              title="Party life"
              description="Type something"
              value="party"
              checked
              icon={<Cocktail />}
            />
            <InterestCard
              title="Gastronomy"
              description="Type something"
              value="gastronomy"
              checked
              icon={<Meal />}
            />
            <InterestCard
              title="Sightseeing"
              description="Type something"
              value="sightseeing"
              checked
              icon={<Sightseeing />}
            />
            <InterestCard
              title="Hookers"
              description="Type something"
              value="hookers"
              checked
              icon={<GenderWoman />}
            />
          </Stack>
          <NomadForm>
            <StyledOrigin>
              <Heading type="title1" spaceAfter="largest">
                What destinations do you want to visit?
              </Heading>
              <Stack spaceAfter="largest">
                <Stack direction="row">
                  <InputField inlineLabel label="From" />
                  <DatePicker
                    label="Departure"
                    onFocus={this.openDatePicker}
                    // TODO: onBlur or clickOutside ref
                    // onBlur={this.closeDatePicker}
                    shown={datePickerOpened}
                    currentDate={selectedDate}
                    onDateSelected={this.handleOnDateSelected}
                  />
                </Stack>
                <Stack direction="row">
                  <Checkbox label="Return to origin" />
                  <Checkbox label="Set return date" />
                </Stack>
              </Stack>
            </StyledOrigin>
            <Heading type="title2" spaceAfter="medium">
              Places to visit
            </Heading>
            <Stack spaceAfter="medium">
              <Stack direction="row">
                <PlacePicker inputValue={placePickerValue} setInputValue={this.handleInputValue} />
                <Slider
                  isOpen={isOpenSlider}
                  onFocus={this.openSlider}
                  defaultValues={[1, 8]}
                  onChange={(from, to) => console.log(`${from}, ${to}`)}
                  // TODO: onBlur or clickOutside ref
                />
                <Button type="secondary" disabled iconLeft={<CloseCircle />} />
              </Stack>
              <Stack direction="row">
                <InputField inlineLabel label="Via" />
                <InputField inlineLabel label="Length" />
                <Button type="secondary" disabled iconLeft={<CloseCircle />} />
              </Stack>
              <Stack direction="row">
                <InputField inlineLabel label="Via" />
                <InputField inlineLabel label="Length" />
                <Button type="secondary" iconLeft={<CloseCircle />} />
              </Stack>
            </Stack>
            <StyledButtons>
              <Stack direction="row">
                <Button type="secondary" iconLeft={<Plus />} block>
                  Add destination
                </Button>
                <Button iconLeft={<Search />} block>
                  Search
                </Button>
              </Stack>
            </StyledButtons>
          </NomadForm>
        </ContentContainer>
      </>
    )
  }
}

export default DownShift
