import React from "react"
import styled from "styled-components"

import ContentContainer from "../components/ContentContainer"

const NomadForm = styled.div`
  max-width: 816px;
`

const StyledOrigin = styled.div`
  max-width: 756px;
`

const FlyForm = () => (
  <ContentContainer>
    {/* TODO: Implement Header - What are you interested in ? */}

    <NomadForm>
      <StyledOrigin>
        {/* TODO: Implement Header - What destinations do you want to visit? */}

        {/* TODO: Implement Popover with Stepper */}

        {/* TODO: Implement InputFields with Stacks */}
      </StyledOrigin>
    </NomadForm>
  </ContentContainer>
)

export default FlyForm
