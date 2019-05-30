const convertValues = values => {
  if (values[0] === values[1]) {
    return `${values[0]} night`
  }
  return `${values[0]} - ${values[1]} nights`
}

export default convertValues
