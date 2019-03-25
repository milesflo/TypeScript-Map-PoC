

class Item {
  public readonly name: string;
  public readonly id: string;
  public readonly slot: string;
  public readonly item_type: string;

  constructor(obj: any) {
    this.name = obj.name;
    this.id = obj.id;
    this.slot = obj.slot;
    this.item_type = obj.item_type;
  }
}

export default Item;
