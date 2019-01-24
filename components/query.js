import { Query } from "react-apollo"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Loading from "@kiwicom/orbit-components/lib/Loading"

import Debug from "./debug"

export default props => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) return <Loading loading type="boxLoader" />
      if (error)
        return (
          <Alert type="critical" title="Error!">
            ${error.message}
          </Alert>
        )
      return props.children ? (
        props.children({ loading, error, data })
      ) : (
        <Debug {...data} />
      )
    }}
  </Query>
)
