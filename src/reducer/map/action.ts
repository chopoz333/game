import { Action } from "../types";
import Map from "../../gameObjects/map";
import { SELECT_TOWER, BUILD_TOWER, GENERATE_MAP } from "./contants";
import { Dispatch } from "redux";
import ArcherTower from "../../gameObjects/tower/archer";
import MageTower from "../../gameObjects/tower/mage";
import { ITile } from "../../entities/map";

export const generateMap = (map: Map) => (dispatch: Dispatch) => {
  dispatch({
    type: GENERATE_MAP,
    payload: { tiles: map.tiles, level: map.level },
  });
};

export const selectTower =
  (selectedTower: ArcherTower | MageTower) => (dispatch: Dispatch) => {
    dispatch({
      type: SELECT_TOWER,
      payload: { selectedTower },
    });
  };

export const buildTower =
  (map: Map, tile: ITile, selectedTower: ArcherTower | MageTower) =>
  (dispatch: Dispatch) => {
    const newMap = map;
    
    newMap.tiles[tile.y][tile.x] = {
      x: tile.x,
      y: tile.y,
      contentType: "tower",
      color: selectedTower.color
    }

    dispatch({
      type: BUILD_TOWER,
      payload: { map: newMap },
    });
  };
