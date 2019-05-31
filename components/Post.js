import React from "react"
import Card, {
  CardHeader,
  CardSection
} from "@kiwicom/orbit-components/lib/Card"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Button from "@kiwicom/orbit-components/lib/Button"

// TODO:
// 1. Use next/Router to navigate to post details /details/:id

class Post extends React.Component {
  goToDetails = () => {
    // TODO: Use next router here, don't forget about id in props
  }

  render() {
    const { id, title, body } = this.props

    return (
      <Stack spaceAfter="medium">
        <Card>
          <CardHeader title={title} subTitle={body} />
          <CardSection>
            <Button
              type="secondary"
              size="small"
              onClick={() => this.goToDetails()}
            >
              Read more
            </Button>
          </CardSection>
        </Card>
      </Stack>
    )
  }
}

export default Post
