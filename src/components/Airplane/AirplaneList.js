import React from "react";
import Airplane from "./Airplane";

const AirplaneList = (props) => {
  const displayAirplanes = (props) => {
    const { airplanes } = props;

    if (airplanes.length > 0) {
      return airplanes.map((airplane) => {
        console.log(airplane);
        return (
          <table>
            <thead>
              <tr>
                <th>Airplane Id</th>
                <th>Manufacture</th>
                <th>Model Number</th>
                <th>Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr key={airplane.airplaneId}>
                <td>{airplane.airplaneId}</td>
                <td>{airplane.manufacture}</td>
                <td>{airplane.modelNumber}</td>
                <td>{airplane.capacity}</td>
              </tr>
            </tbody>
          </table>
          // <div key={airplane.airplaneId}>
          //   <p>{airplane.manufacture}</p>
          //   <p>{airplane.modelNumber}</p>
          //   <p>{airplane.capacity}</p>
          // </div>
        );
      });
    } else {
      return <h3>No Airplanes Yet</h3>;
    }
  };

  return <>{displayAirplanes(props)}</>;
};

export default AirplaneList;
