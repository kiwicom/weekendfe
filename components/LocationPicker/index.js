import * as React from "react"
import { QueryRenderer } from "@kiwicom/relay"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ClickOutside from "@kiwicom/orbit-components/lib/ClickOutside"
import Text from "@kiwicom/nitro/lib/components/Text"

import PickerDropDown from "./primitives/PickerDropDown"
import NoResult from "./primitives/NoResult"
// import LocationPickerResultList from "./LocationPickerResultList"
import getPlaceholder from "./services/placeholder"

class LocationPicker extends React.Component {
  state = {
    active: false,
    input: ""
  }

  node = React.createRef()

  handleClose = () => {
    this.setState({
      active: false
    })
  }

  handleSelect = item => {
    const { onChange } = this.props

    onChange(item)
    this.setState({
      active: false
    })
  }

  handleChange = ev => {
    this.setState({
      input: ev.target.value,
      active: true
    })
  }

  render() {
    const { value, label, icon } = this.props
    const { active, input } = this.state

    const placeholder = value ? getPlaceholder(value) : ""

    return (
      <ClickOutside active={active} onClickOutside={this.handleClose}>
        <>
          <InputField
            inlineLabel
            label={label}
            placeholder={placeholder}
            onChange={this.handleChange}
            prefix={icon}
            value={active ? input : ""}
          />
          {input && active && (
            <QueryRenderer
              clientID="kek"
              query={
                {
                  /* write gql query */
                }
              }
              variables={{ input }}
              render={res => {
                if (res.error) {
                  return (
                    <Alert type="critical">
                      <Text t="common.api_error" />
                    </Alert>
                  )
                }

                if (!res.props) {
                  return null
                }

                if (!res.props.allLocations) {
                  // TODO render this in the list if length is 0
                  return (
                    <NoResult>
                      <Text t="forms.places_no_results" />
                    </NoResult>
                  )
                }

                return (
                  <PickerDropDown ref={this.node}>
                    {/* TODO: PickerResults */}
                  </PickerDropDown>
                )
              }}
            />
          )}
        </>
      </ClickOutside>
    )
  }
}

export default LocationPicker
