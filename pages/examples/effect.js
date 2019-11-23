import React, {
  useEffect,
  useRef,
  useState,
  useCallback
} from "react"
import Button from "@kiwicom/orbit-components/lib/Button"

const Example = () => {
  const ref = useRef(null)
  const [dimensions, setDimensions] = useState(0)
  useEffect(() => {
    const getDimensions = () => {
      if (ref && ref.current) {
        const { left } = ref.current.getBoundingClientRect()
        console.log(left);
        setDimensions(left)
      }
    }
    getDimensions()
    window.addEventListener("resize", getDimensions)
    return () => {
      window.removeEventListener("resize", getDimensions)
    }
  }, [])
  return (
    <Button type="success" ref={ref}>
      Hello World: {dimensions}
    </Button>
  )
}

export default Example
