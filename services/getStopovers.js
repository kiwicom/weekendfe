const getStopovers = placesInUrl => {
  if (!placesInUrl) return undefined
  const items = placesInUrl.split("-")
  const result = []
  // eslint-disable-next-line
	for (let i = 0; i < items.length; i += 3)
    // eslint-disable-next-line fp/no-mutating-methods
    result.push({
      locations: [items[i]],
      nightsFrom: Number(items[i + 1]),
      nightsTo: Number(items[i + 2])
    })
  return result
}

export default getStopovers
