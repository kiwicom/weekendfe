import PlacePicker from "../components/PlacePicker"

export default () => {
  return (
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
}
