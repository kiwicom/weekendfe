// @flow

import * as React from "react"
import { Text } from "@kiwicom/orbit-components"

type Props = {|
  name: string,
  arrival: Date
|}

const Time = ({ arrival, name }: Props) => {
  const now = new Date()
  const isLate = arrival > now

  return (
    <Text size="large" type={isLate ? "warning" : "info"}>
      {name} arrived at {arrival.toString()}
    </Text>
  )
}

export default Time
