import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import Coffee from "@kiwicom/orbit-components/lib/icons/Coffee"
import Shopping from "@kiwicom/orbit-components/lib/icons/Shopping"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import styled, { css } from "styled-components"

import InterestCard from "./InterestCard"
import useUrl from "./useUrl"

const StyledInterests = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 890px;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXXLarge};

  > * {
    margin-bottom: ${({ theme }) => theme.orbit.spaceSmall};
    margin-right: ${({ theme }) => theme.orbit.spaceSmall};
  }

  ${mq.mediumMobile(css`
    flex-direction: row;
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
        value="drinks"
        checked={interest === "drinks"}
        onChange={changeRadio}
        icon={<Cocktail />}
      />
      <InterestCard
        title="Food"
        value="food"
        checked={interest === "food"}
        onChange={changeRadio}
        icon={<Meal />}
      />
      <InterestCard
        title="Coffee"
        value="coffee"
        checked={interest === "coffee"}
        onChange={changeRadio}
        icon={<Coffee />}
      />
      <InterestCard
        title="Shops"
        value="shops"
        checked={interest === "shops"}
        onChange={changeRadio}
        icon={<Shopping />}
      />
    </StyledInterests>
  )
}
