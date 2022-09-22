import React from "react";
import Airplane from "./Airplane";

const AirplaneList = (props) => {
  const displayAirplanes = (props) => {
    const { airplanes } = props;

    if (airplanes.length > 0) {
      return airplanes.map((airplane) => {
        console.log(airplane);
        return (
          <div key={airplane.airplaneId}>
            <p>{airplane.manufacture}</p>
            <p>{airplane.modelNumber}</p>
            <p>{airplane.capacity}</p>
          </div>
        );
      });
    } else {
      return <h3>No Airplanes Yet</h3>;
    }
  };

  return <>{displayAirplanes(props)}</>;
};

export default AirplaneList;
