import Map from "../map";

export class Game {
  map: Map
  waveInformation: any

  constructor(map: Map, waveInformation: any) {
    this.map = map
    this.waveInformation = waveInformation
  }
}