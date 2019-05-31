export default props => (
  <code>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </code>
)
