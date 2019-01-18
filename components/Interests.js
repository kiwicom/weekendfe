import { useState } from "react"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import Sightseeing from "@kiwicom/orbit-components/lib/icons/Sightseeing"
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman"

import InterestCard from "./InterestCard"

export default function Interests() {
  const [interest, setInterest] = useState("party")
  const changeRadio = e => {
    setInterest(e.target.value)
  }

  return (
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
        checked={interest === "party"}
        onChange={changeRadio}
        icon={<Cocktail />}
      />
      <InterestCard
        title="Gastronomy"
        description="Type something"
        value="gastronomy"
        checked={interest === "gastronomy"}
        onChange={changeRadio}
        icon={<Meal />}
      />
      <InterestCard
        title="Sightseeing"
        description="Type something"
        value="sightseeing"
        checked={interest === "sightseeing"}
        onChange={changeRadio}
        icon={<Sightseeing />}
      />
      <InterestCard
        title="Hookers"
        description="Type something"
        value="hookers"
        checked={interest === "hookers"}
        onChange={changeRadio}
        icon={<GenderWoman />}
      />
    </Stack>
  )
}
