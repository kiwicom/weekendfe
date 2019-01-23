import * as React from "react"
import styled from "styled-components"
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty"
import StarFull from "@kiwicom/orbit-components/lib//icons/StarFull"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"

const StyledRatingStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.orbit.paletteProductNormal};
  }
`

StyledRatingStars.defaultProps = {
  theme: defaultTheme
}

const maxStars = 5

const RatingStars = ({ rating }) => {
  const ratingRounded = Math.round(rating / 2)
  return (
    <StyledRatingStars>
      {Array(...Array(maxStars)).map((_, index) => {
        const key = `star-${index}`
        return index <= ratingRounded - 1 ? (
          <StarFull key={key} size="small" />
        ) : (
          <StarEmpty key={key} size="small" />
        )
      })}
    </StyledRatingStars>
  )
}

export default RatingStars
