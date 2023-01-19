import Map from "../map";

const isBlock = (
  towerCoordinate: { x: number; y: number },
  map: Map
): boolean =>
  map.tiles[towerCoordinate.y][towerCoordinate.x].contentType === "block";

const isBoost = (
  towerCoordinate: { x: number; y: number },
  map: Map
): boolean =>
  map.tiles[towerCoordinate.y][towerCoordinate.x].contentType === "boost";

export const towerBuildingRules = (
  towerCoordinate: { x: number; y: number },
  map: Map
): boolean => {
  return isBlock(towerCoordinate, map) || isBoost(towerCoordinate, map) || false;
};
