import React from "react"
import {
  Portal,
  Modal,
  Button,
  Stack,
  Text
} from "@kiwicom/orbit-components"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"
import ModalHeader from "@kiwicom/orbit-components/lib/Modal/ModalHeader"
import { CopyToClipboard } from "react-copy-to-clipboard"

class ShareModal extends React.Component {
  state = {
    copied: false
  }

  render() {
    const { onClose } = this.props
    const { copied } = this.state

    const path = window && window.location.href

    return (
      <Portal element="modals">
        <Modal onClose={() => onClose(false)}>
          <ModalHeader title="Share the trip with your friends!" />
          <ModalSection>
            <Stack align="center" justify="between">
              <Text weight="bold" size="large">
                Just click to copy the URL
              </Text>
              <CopyToClipboard
                text={path}
                onCopy={() =>
                  this.setState({
                    copied: true
                  })
                }
              >
                <Button type="secondary">
                  {copied ? "Copied" : "Copy"}
                </Button>
              </CopyToClipboard>
            </Stack>
          </ModalSection>
        </Modal>
      </Portal>
    )
  }
}

export default ShareModal
