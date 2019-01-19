import PlacePicker from "../components/PlacePicker"

export default () => (
  <>
    <PlacePicker
      label="Pick a place"
      placeholder="Choose a place"
      onChange={item => alert(item)}
    />

    <PlacePicker
      label="Pick a place"
      placeholder="Choose a place"
      defaultValue="Austria"
    />
  </>
)
