import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import Sightseeing from "@kiwicom/orbit-components/lib/icons/Sightseeing"
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import styled, { css } from "styled-components"

import InterestCard from "./InterestCard"
import useUrl from "./useUrl"

const StyledInterests = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 890px;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXLarge};

  > * {
    margin-bottom: ${({ theme }) => theme.orbit.spaceSmall};
  }

  ${mq.largeMobile(css`
    flex-direction: row;

    > * {
      margin-bottom: 0;
      margin-right: ${({ theme }) => theme.orbit.spaceSmall};
    }
  `)}
`

StyledInterests.defaultProps = {
  theme: defaultTheme
}

export default function Interests({ defaultValue }) {
  const [interest, setInterest] = useUrl(
    defaultValue || "party",
    "interest"
  )
  const changeRadio = e => {
    setInterest(e.target.value)
  }

  return (
    <StyledInterests>
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
    </StyledInterests>
  )
}
