import {
  createEnvironment,
  createNetworkFetcher
} from "@adeira/relay"

export const weekendapiEnvironment = createEnvironment({
  fetchFn: createNetworkFetcher("https://weekend-api.now.sh/", {
    "X-Client": "js-weekend"
  })
})

export const trevorbladesEnvironment = createEnvironment({
  fetchFn: createNetworkFetcher(
    "https://countries.trevorblades.com/",
    {
      "X-Client": "js-weekend"
    }
  )
})
