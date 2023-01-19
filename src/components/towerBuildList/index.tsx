import { FunctionComponent, useEffect, useState } from "react";
import ArcherTower from "../../gameObjects/tower/archer";
import Tower from "../../gameObjects/tower";
import "./index.css";
import MageTower from "../../gameObjects/tower/mage";
import TowerComponent from "../tower";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { selectTower } from "../../reducer/map/action";
import { useSelector } from "react-redux";
import { selectedTowerSelector } from "../../reducer/map/selector";
import { shallowEqual } from "react-redux";

interface TowerBuildListProps {
  towerList: Record<string, any>;
}

const TowerBuildList: FunctionComponent<TowerBuildListProps> = ({}) => {
  const dispatch = useAppDispatch()

  const [towerList, setTowerList] = useState([new ArcherTower(), new MageTower()]);
  const [selectedTower, setSelectedTower] = useState<ArcherTower | MageTower>()

  const towerSelector = useSelector(selectedTowerSelector, shallowEqual);

  useEffect(() => {
    if (selectedTower) dispatch(selectTower(selectedTower))
  }, [selectedTower])

  return (
    <div className="tower-list" >
      {towerList.map((el) => (
        <>
          <TowerComponent info={el} selectTower={(info) => setSelectedTower(info)} selectedTower={towerSelector}/>
        </>
      ))}
    </div>
  );  
};

export default TowerBuildList;
