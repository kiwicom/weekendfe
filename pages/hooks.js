import React from "react"
import styled from "styled-components"
import Text from "@kiwicom/orbit-components/lib/Text"
import Separator from "@kiwicom/orbit-components/lib/Separator"
import Stack from "@kiwicom/orbit-components/lib/Stack"

import State from "./examples/state"
import Ref from "./examples/ref"
import Context from "./examples/context"
import Effect from "./examples/effect"
import Reducer from "./examples/reducer"

const Wrapper = styled.div`
  padding: 40px 20px;
`
const Hooks = () => {
  return (
    <Wrapper>
      <Stack spacing="extraLoose">
        <Text weight="bold" size="large">
          useState
        </Text>
        <State />
        <Separator />
        <Text weight="bold" size="large">
          useRef
        </Text>
        <Ref />
        <Separator />
        <Text weight="bold" size="large">
          useContext
        </Text>
        <Context />
        <Separator />
        <Text weight="bold" size="large">
          useReducer
        </Text>
        <Reducer />
        <Separator />
        <Text weight="bold" size="large">
          useEffect
        </Text>
        <Effect />
      </Stack>
    </Wrapper>
  )
}

export default Hooks
