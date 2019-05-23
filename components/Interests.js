import React, { useCallback } from "react"
import {
  Cocktail,
  Meal,
  Coffee,
  Shopping
} from "@kiwicom/orbit-components/lib/icons"
import { Stack } from "@kiwicom/orbit-components"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import styled, { css } from "styled-components"

import InterestCard from "./InterestCard"
import useUrl from "./useUrl"

const INTERESTS = [
  {
    value: "drinks",
    title: "Party",
    icon: <Cocktail />
  },
  { value: "food", title: "Food", icon: <Meal /> },
  { value: "coffee", title: "Coffee", icon: <Coffee /> },
  { shops: "shops", title: "Shops", icon: <Shopping /> }
]

export default function Interests({ defaultValue }) {
  const [interest, setInterest] = useUrl(
    defaultValue || INTERESTS[0].value,
    "interest"
  )
  const handleOnChange = useCallback(e => {
    setInterest(e.target.value)
  })

  const handleOnClick = useCallback(value => {
    setInterest(value)
  })

  return (
    <Stack
      direction="column"
      spaceAfter="largest"
      largeMobile={{ direction: "row" }}
    >
      {INTERESTS.map((item, key) => (
        <InterestCard
          // eslint-disable-next-line
            key={key}
          title={item.title}
          value={item.value}
          checked={interest === item.value}
          onChange={handleOnChange}
          onClick={handleOnClick}
          icon={item.icon}
        />
      ))}
    </Stack>
  )
}
