import * as React from "react"
import styled from "styled-components"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Airplane from "@kiwicom/orbit-components/lib/icons/AirplaneUp"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import useOnClickOutside from "@kiwicom/orbit-components/lib/hooks/useClickOutside"

import Desktop from "./components/Desktop"
import Mobile from "./components/Mobile"
import Links from "./components/Links"
import Logo from "./components/Logo"

const Wrapper = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  height: 65px;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  background: ${({ theme }) => theme.orbit.paletteWhite};
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowFixed};
`

const Popup = styled.div`
  z-index: 1000;
  position: absolute;
  left: 0;
  right: 0;
  top: 65px;
  margin: 12px;
  border: 0;
  box-shadow: 0 6px 16px 0 rgba(45, 53, 59, 0.22),
    0 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  overflow: hidden;
  width: 95%;
  min-width: 230px;
  box-sizing: border-box;
  padding: 20px;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  user-select: none;
  min-height: 100px;
`

const OtherLinks = [
  "Languages",
  "Currency",
  "Help",
  "Manage my bookings"
]

const LinkIcon = styled(Airplane)`
  ${({ opened }) => opened && `transform: rotate(180deg)`}
`

const SomeComponent = () => {
  const [opened, setOpened] = React.useState(false)
  const node = React.useRef(null)

  useOnClickOutside(node, () => setOpened(false))

  return (
    <Wrapper>
      <Stack inline align="center">
        <Logo />
        <Desktop>
          <Stack flex>
            <Links />
          </Stack>
        </Desktop>
        <Mobile>
          <ButtonLink
            icon={<LinkIcon color="secondary" opened={opened} />}
            onClick={() => setOpened(!opened)}
          />
          {opened && (
            <Popup ref={node}>
              <Stack direction="column">
                <Links />
              </Stack>
            </Popup>
          )}
        </Mobile>
      </Stack>
      <Stack inline align="center" justify="end">
        {OtherLinks.map(link => (
          <ButtonLink size="small" type="seconary">
            {link}
          </ButtonLink>
        ))}
      </Stack>
    </Wrapper>
  )
}

export default SomeComponent
