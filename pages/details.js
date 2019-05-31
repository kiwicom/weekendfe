import fetch from "isomorphic-fetch"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"

import ContentContainer from "../components/ContentContainer"

// TODO:
// 1. Add logo from static folder
// 2. Load post details
// 3. Show posts

const DetailsPage = ({ title, body }) => (
  <ContentContainer>
    <Heading type="title1" spaceAfter="largest">
      <Stack spaceAfter="medium" align="center">
        {/* <img
          style={{ width: 200 }}
          src="TODO"
          alt="Kiwi Logo"
        /> */}
        {title}
      </Stack>
    </Heading>
    {body}
  </ContentContainer>
)

export default DetailsPage
