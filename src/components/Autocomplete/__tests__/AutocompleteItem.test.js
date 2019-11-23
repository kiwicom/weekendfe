// @flow
/* eslint-env jest */

import * as React from "react"
import { mount } from "enzyme"
import { QueryRenderer, graphql } from "@adeira/relay"
import {
  createMockEnvironment,
  MockPayloadGenerator
} from "relay-test-utils"

import AutocompleteItem from "../AutocompleteItem"

describe("AutocompleteItem", () => {
  it("should show location name", () => {
    const environment = createMockEnvironment()
    const TestComponent = () => (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AutocompleteItemQuery {
            location {
              ... on Location {
                ...AutocompleteItem_location
              }
            }
          }
        `}
        onResponse={response => {
          if (response.location) {
            return <AutocompleteItem location={response.location} />
          }

          return null
        }}
      />
    )

    const wrapper = mount(<TestComponent />)

    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        Location: () => ({
          name: "Prague"
        })
      })
    )
    wrapper.update()

    expect(wrapper.find("Tile").prop("title")).toBe("Prague")
  })
})
