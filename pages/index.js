import Alert from "@kiwicom/orbit-components/lib/Alert"
import Illustration from "@kiwicom/orbit-components/lib/Illustration"

import Query from "../components/query"

export default () => (
  <>
    <Alert type="success">Hello, Welcome to JS WEEKEND!</Alert>
    <Illustration size="medium" name="Accommodation" dataTest="test" spaceAfter={null} />
    <Query />
  </>
)
