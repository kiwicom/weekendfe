import { useState } from "react"
import Portal from "@kiwicom/orbit-components/lib/Portal"
import Modal from "@kiwicom/orbit-components/lib/Modal"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"
import ModalHeader from "@kiwicom/orbit-components/lib/Modal/ModalHeader"
import Button from "@kiwicom/orbit-components/lib/Button"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import { CopyToClipboard } from "react-copy-to-clipboard"

const ShareModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false)

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
              onCopy={() => setCopied(true)}
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

export default ShareModal
