
import itemsFile from "./items.json"
import Item from "../models/Item"
import Weapon from "../models/Weapon"

const items = new Map<string, Item | Weapon>()

itemsFile.forEach(item => {
  switch(item.item_type) {
    case ("equipment"): {
      items.set(item.id, new Item(item))
      break;
    }
    case ("weapon"): {
      items.set(item.id, new Weapon(item))
      break;
    }
  }
})

export default items;
