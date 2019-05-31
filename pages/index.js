import fetch from "isomorphic-fetch"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"

import ContentContainer from "../components/ContentContainer"
import Post from "../components/Post" // TODO: Use this component for Post

// TODO:
// 1. Load posts
// 2. Show posts

const HomePage = props => {
  return (
    <ContentContainer>
      <Heading type="title1" spaceAfter="largest">
        <Stack spaceAfter="medium" align="center">
          What are you interested in?
        </Stack>
      </Heading>
    </ContentContainer>
  )
}

export default HomePage
