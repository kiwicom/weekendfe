import React, { useState, useCallback } from "react"
import Button from "@kiwicom/orbit-components/lib/Button"

export default function ({ data = ["apple", "pear", "kiwi"] }) {
  const fnMemo = useCallback(
    data =>
      data
        .filter(item => item !== "pear")
        .map(item => `fruit-${item}`),
    []
  )
  const [count, setCount] = useState(() => fnMemo(data))
  return (
    <Button onClick={() => setCount(c => [...c, "pear"])}>
      {count.join(", ")}
    </Button>
  )
}
