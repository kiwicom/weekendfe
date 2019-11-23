import * as React from "react"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import styled, { keyframes } from "styled-components"
import Car from "@kiwicom/orbit-components/lib/icons/Car"
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane"

import Desktop from "./Desktop"
import Mobile from "./Mobile"

const LINKS = [
  { name: "Travel", link: "https://kiwi.com/", icon: <Airplane /> },
  { name: "Cars", link: "https://cars.kiwi.com/", icon: <Car /> }
]

const animation = keyframes`
  from {
    width: 0%;
  }

  to {
    with: 100%;
  }
`

const Button = styled(ButtonLink)`
  position: relative;
  height: 65px;

  &:hover {
    :after {
      height: 3px;
      width: 100%;
      background: green;
      content: "";
      animation: 1s ${animation} ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`

const LinksComponent = () => {
  return LINKS.map(({ name, link, icon }) => (
    <>
      <Desktop>
        <Button type="secondary" size="small" href={link}>
          {name}
        </Button>
      </Desktop>
      <Mobile>
        <Button
          type="secondary"
          iconLeft={icon}
          size="small"
          href={link}
        >
          {name}
        </Button>
      </Mobile>
    </>
  ))
}

export default LinksComponent
