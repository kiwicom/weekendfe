import { useState } from "react"
import Router from "next/router"

const useUrl = (defaultValue, paramName, serializer = val => val) => {
  const [value, updater] = useState(defaultValue)
  const updaterWithUrl = newValue => {
    const newQuery = {
      ...Router.query,
      [paramName]: serializer(newValue)
    }
    const newUrl = {
      pathname: Router.pathname,
      query: newQuery
    }
    // eslint-disable-next-line fp/no-mutating-methods
    Router.push(newUrl, newUrl, { shallow: true })
    updater(newValue)
  }
  return [value, updaterWithUrl]
}

export default useUrl
