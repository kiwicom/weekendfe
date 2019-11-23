// @flow
/* eslint-env node, jest */

import * as React from "react"
import { mount } from "enzyme"
import { advanceTo } from "jest-date-mock"

import Time from "../Time"

describe("Time", () => {
  beforeEach(() => {
    advanceTo(new Date(2020, 11, 31))
  })

  it("Shows that Alan was late", () => {
    const component = mount(
      <Time name="Alan" arrival={new Date(2048, 11, 31)} />
    )

    expect(component.find("Text").prop("type")).toBe("warning")
  })
})
