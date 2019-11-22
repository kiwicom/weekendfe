import * as React from "react"
import Router from "next/router"

const useUrl = (defaultValue, paramName, serializer = val => val) => {
  const [value, updater] = React.useState(defaultValue)
  const updaterWithUrl = newValue => {
    const newQuery = {
      ...Router.query,
      [paramName]: serializer(newValue)
    }
    const filterEmptyQueries = Object.keys(newQuery).reduce(
      (accumulator, currentValue) => {
        if (newQuery[currentValue]) {
          return {
            ...accumulator,
            [currentValue]: newQuery[currentValue]
          }
        }
        return accumulator
      },
      {}
    )
    const newUrl = {
      pathname: Router.pathname,
      query: filterEmptyQueries
    }
    // eslint-disable-next-line fp/no-mutating-methods
    Router.push(newUrl, newUrl, { shallow: true })
    updater(newValue)
  }
  return [value, updaterWithUrl]
}

export default useUrl
