import items from "./utils/items"

try {
  items.has('hat')
} catch (e) {
  console.log(e.message)
  console.log("whyyyyy")
}


