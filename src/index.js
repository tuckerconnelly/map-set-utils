export const objectToMap = object => {
  const map = new Map()
  for (const property in object) {
    if (!object.hasOwnProperty(property)) continue

    map.set(property, object[property])
  }

  return map
}

export const mapToObject = map => {
  const object = {}
  for (const [key, value] of map) {
    object[key] = value
  }
  return object
}
