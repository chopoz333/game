import { notStrictEqual } from "assert"
import { ITile } from "../../entities/map"

class Map {
  public tiles: ITile[][]
  public level: number

  constructor(tilesMap: ITile[][], level: number) {
    this.tiles = tilesMap
    this.level = level
  }

  public setTile(x: number, y: number, value: ITile) {
    this.tiles[y][x] = value
  }
}

export default Map