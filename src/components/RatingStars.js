import * as React from "react"
import styled from "styled-components"
import {
  StarEmpty,
  StarFull
} from "@kiwicom/orbit-components/lib/icons"

// make StyledRatingStars component

// this container should be flex that display children in row and doesn't shrink at all

const maxStars = 5

const RatingStars = ({ rating }) => {
  const ratingRounded = Math.round(rating / 2)
  return (
    // replace the div
    <div>
      {Array(...Array(maxStars)).map((_, index) => {
        const key = `star-${index}`
        return index <= ratingRounded - 1 ? (
          <StarFull key={key} size="small" customColor="white" />
        ) : (
          <StarEmpty key={key} size="small" customColor="white" />
        )
      })}
    </div>
  )
}

export default RatingStars
