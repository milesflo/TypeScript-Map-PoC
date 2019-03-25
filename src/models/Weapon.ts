import Item from "./Item"

class Weapon extends Item {
  public readonly damage: number;

  constructor (obj: any) {
    super(obj);
    this.damage = obj.damage;
  }
}

export default Weapon;
