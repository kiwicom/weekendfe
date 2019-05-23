import React, { useCallback } from "react"
import Cocktail from "@kiwicom/orbit-components/lib/icons/Cocktail"
import Meal from "@kiwicom/orbit-components/lib/icons/Meal"
import Coffee from "@kiwicom/orbit-components/lib/icons/Coffee"
import Shopping from "@kiwicom/orbit-components/lib/icons/Shopping"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme"
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

const INTERESTS = [
  {
    value: "drinks",
    title: "Party Life",
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
    <StyledInterests>
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
    </StyledInterests>
  )
}
