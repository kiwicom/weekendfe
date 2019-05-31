const placeholder = loc => {
  const { type, name } = loc

  switch (type) {
    case "city":
    case "autonomous_territory":
      return `${name} ${loc.country ? `(${loc.country.name})` : ""}`

    case "airport":
    case "station":
      return `${name} ${loc.code ? `(${loc.code})` : ""}`

    default:
      return name
  }
}

export default placeholder
