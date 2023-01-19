import { Action } from "../types";
import Map from "../../gameObjects/map";
import { SELECT_TOWER, BUILD_TOWER, GENERATE_MAP } from "./contants";
import Tower from "../../gameObjects/tower";
import { ITile } from "../../entities/map";
import ArcherTower from "../../gameObjects/tower/archer";
import MageTower from "../../gameObjects/tower/mage";

interface DefaultState {
  map: Map
  selectedTower: ArcherTower | MageTower
}

const defaultState: DefaultState = {
  map: new Map([], 0),
  selectedTower: {},
};

export default function interactionWithMap(
  state = defaultState,
  action: Action<{ tiles: ITile[][]; selectedTower: Tower, level: number, map: Map }>
) {
  switch (action.type) {
    case GENERATE_MAP: {
      return {
        ...state,
        map: {
          tiles: action.payload.tiles,
          level: action.payload.level
        },
      };
    }
    case SELECT_TOWER: {
      return {
        ...state,
        selectedTower: action.payload.selectedTower,
      };
    }
    case BUILD_TOWER: {
      return {
        ...state,
        map: action.payload.map,
      };
    }

    default:
      return state;
  }
}
