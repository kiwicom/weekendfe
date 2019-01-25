import * as React from "react"
import styled from "styled-components"
import Loading from "@kiwicom/orbit-components/lib/Loading"

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
`

const MapLoading = ({ text }) => (
  <LoadingContainer>
    <Loading loading text={text} />
  </LoadingContainer>
)

export default MapLoading
