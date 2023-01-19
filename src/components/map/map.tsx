import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ITile } from "../../entities/map";
import { mapSelector, selectedTowerSelector } from "../../reducer/map/selector";
import Map from "../../gameObjects/map";
import "./map.css";
import { generateMap, buildTower, selectTower } from "../../reducer/map/action";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { towerBuildingRules } from "../../gameObjects/rules/towerBuildingRules";

interface MapComponentProps {
  level: number;
}

const MapComponent: FunctionComponent<MapComponentProps> = ({ level }) => {
  const dispatch = useAppDispatch();

  const [mapLevel, setMapLevel] = useState<Map>();

  const map = useSelector(mapSelector, shallowEqual);
  const selectedTower = useSelector(selectedTowerSelector, shallowEqual);

  const loadMapLevel = useCallback(async () => {
    const resource: { tilesInfo: ITile[][] } = await import(
      `../../levels/${level}/map`
    );

    const map = new Map(resource.tilesInfo, level);

    setMapLevel(map);
    dispatch(generateMap(map));
  }, [setMapLevel]);

  useEffect(() => {
    loadMapLevel();
  }, []);

  const build = (tile: ITile) => {
    if (
      selectedTower.name &&
      towerBuildingRules({ y: tile.y, x: tile.x }, map)
    ) {
      const test = JSON.parse(JSON.stringify(map));
      test.tiles[tile.y][tile.x] = {
        x: tile.x,
        y: tile.y,
        contentType: "tower",
      };

      dispatch(buildTower(test, tile, selectedTower));
    }
  };

  return (
    <div className="map">
      {map &&
        map.tiles.map((row, index) => (
          <div className="map-row" key={index}>
            {row.map((cell) => (
              <div
                id={String(cell.x) + String(cell.y)}
                key={String(cell.x) + String(cell.y)}
                onClick={() => build(cell)}
                className={`map-cell ${cell.contentType}`}
                style={cell.color ? { background: cell.color } : {}}
              >
                {}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default MapComponent;
