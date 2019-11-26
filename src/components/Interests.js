import React from "react"
import {
  Cocktail,
  Meal,
  Coffee,
  Shopping
} from "@kiwicom/orbit-components/lib/icons"
import { Stack } from "@kiwicom/orbit-components"

import InterestCard from "./InterestCard"
import useUrl from "../services/useUrl"

const INTERESTS = [
  {
    value: "drinks",
    title: "Party",
    icon: <Cocktail />
  },
  { value: "food", title: "Food", icon: <Meal /> },
  { value: "coffee", title: "Coffee", icon: <Coffee /> },
  { value: "shops", title: "Shops", icon: <Shopping /> }
]

export default function Interests({ defaultValue }) {
  const [interest, setInterest] = useUrl(
    defaultValue || INTERESTS[0].value,
    "interest"
  )
  const handleOnChange = e => {
    setInterest(e.target.value)
  }

  const handleOnClick = value => {
    setInterest(value)
  }

  return (
    <Stack
      direction="column"
      spaceAfter="largest"
      largeMobile={{ direction: "row" }}
    >
      {INTERESTS.map(item => (
        <InterestCard
          key={item.value}
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
