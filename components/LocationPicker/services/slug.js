const slug = loc => {
  switch (loc.type) {
    case "airport":
    case "station":
      return loc.code ? `(${loc.code})` : ""

    case "city":
    case "autonomous_territory":
      return loc.country && loc.country.name
        ? `(${loc.country.name})`
        : ""

    default:
      return ""
  }
}

export default slug
