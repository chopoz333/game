export interface ITile {
  x: number
  y: number
  contentType: TTileType
  color?: string
}

type TTileType = 'block' | 'road' | 'tower' | 'boost' | 'finish'