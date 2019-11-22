import * as React from "react"
import { Alert, Modal, Portal } from "@kiwicom/orbit-components"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"

const ErrorModal = () => (
  <Portal element="modals">
    <Modal>
      <ModalSection>
        <Alert type="critical" title="Something went wrong.">
          The map could not be loaded.
          <br />
          Please reload the page.
        </Alert>
      </ModalSection>
    </Modal>
  </Portal>
)

export default ErrorModal
