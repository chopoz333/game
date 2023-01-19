import { FunctionComponent } from "react";
import MapComponent from "../components/map/map";
import TowerBuildList from "../components/towerBuildList";

interface MapComponentProps {
  level: number;
} 

const Map: FunctionComponent<MapComponentProps> = ({ level }) => {

  return (
    <>
      <MapComponent level={level} />
      <TowerBuildList towerList={[]}/>
    </>
  );
};

export default Map;
