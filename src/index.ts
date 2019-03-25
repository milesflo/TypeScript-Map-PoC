import items from "./utils/items"

// Items 
console.log(items)

// Item is an array, despite it being of type Map... interesting.
console.log(Array.isArray(items) ? "Item is Array" : "Item is not Array")

// `has` is not defined
try {
  items.has('hat')
} catch (e) {
  console.log(e.message)
}

// `get` is not defined
try {
  items.get('hat')
} catch (e) {
  console.log(e.message)
}
