import { FunctionComponent } from "react";
import Tower from "../../gameObjects/tower";
import ArcherTower from "../../gameObjects/tower/archer";
import MageTower from "../../gameObjects/tower/mage";

interface TowerComponentProps {
  info: ArcherTower | MageTower;
  selectTower: (info: ArcherTower | MageTower) => void;
  selectedTower: ArcherTower | MageTower;
}

const TowerComponent: FunctionComponent<TowerComponentProps> = ({
  info,
  selectTower,
  selectedTower,
}) => {
  const generateInfo = (info: Tower) => {
    return `name: ${info.name}\ninformation: ${info.information}\ndamage: ${info.damage}\nname: ${info.name}\ntype: ${info.type}`;
  };

  return (
    <div
      onClick={() => selectTower(info)}
      data-tooltip={generateInfo(info)}
      data-html="true"
      className={`${selectedTower.name === info.name ? 'selected-tower' : ''}`}
    >
      {info.name}
    </div>
  );
};

export default TowerComponent;
