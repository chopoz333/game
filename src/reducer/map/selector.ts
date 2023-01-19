import Map from "../../gameObjects/map";
import ArcherTower from "../../gameObjects/tower/archer";
import MageTower from "../../gameObjects/tower/mage";

export const mapSelector = (state: { interactionWithTowers: { map: Map } }) =>
  state.interactionWithTowers.map;

export const selectedTowerSelector = (state: {
  interactionWithTowers: { map: []; selectedTower: ArcherTower | MageTower };
}) => state.interactionWithTowers.selectedTower;
