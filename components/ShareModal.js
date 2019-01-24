import * as React from "react"
import Portal from "@kiwicom/orbit-components/lib/Portal"
import Modal from "@kiwicom/orbit-components/lib/Modal"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"
import ModalHeader from "@kiwicom/orbit-components/lib/Modal/ModalHeader"
import Button from "@kiwicom/orbit-components/lib/Button"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"

const ShareModal = ({ onClose }) => (
  <Portal element="modals">
    <Modal onClose={() => onClose(false)}>
      <ModalHeader title="Share the trip with your friends!" />
      <ModalSection>
        <Stack align="center" justify="between">
          <Text weight="bold" size="large">
            Just click to copy the URL
          </Text>
          <Button type="secondary">Copy</Button>
        </Stack>
      </ModalSection>
    </Modal>
  </Portal>
)

export default ShareModal
