// @flow
// flowlint unclear-type:error
/* eslint-disable react/destructuring-assignment */

import * as React from "react"
import {
  Modal,
  ModalHeader,
  ModalSection,
  Text,
  Alert,
  Illustration,
  Button
} from "@kiwicom/orbit-components"

type Props = {
  title: ?string,
  onClose: () => void,
  illustration: "NoBookings" | "NoResults" | "Success",
  content: React.Node,
  button: React.Element<typeof Button>
}

const FancyModal = (props: Props) => {
  return (
    <Modal onClose={props.onClose} size="normal">
      <ModalHeader
        title={props.title}
        illustration={<Illustration name={props.illustration} />}
        description="Lorem ispum dolor sit amet"
        suppressed={false}
      />
      <ModalSection suppressed={false}>
        <Alert title="Welcome!" type="info" />
        {props.content}
      </ModalSection>
      <ModalSection>{props.button}</ModalSection>
    </Modal>
  )
}

const App = () => {
  const [isOpen, toggle] = React.useState(true)

  return (
    <FancyModal
      title="Fancy modal"
      onClose={() => toggle(!isOpen)}
      illustration="NoBookings"
      button={<Button type="primary" title="Click me!" />}
      content={
        <Text>
          You can try all possible configurations of this component.
          However, check Orbit.Kiwi for more detailed design
          guidelines.
        </Text>
      }
    />
  )
}

export default App
