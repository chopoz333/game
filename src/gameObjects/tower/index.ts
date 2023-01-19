class Tower {
  name?: string;
  damage?: number;
  type?: string;
  information?: string;
  color?: string;

  constructor(
    name: string,
    damage: number,
    type: string,
    information: string,
    color: string
  ) {
    this.name = name;
    this.damage = damage;
    this.type = type;
    this.information = information;
    this.color = color;
  }
}

export default Tower;
