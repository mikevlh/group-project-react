import React from "react";
import Airport from "./Airport";

const AirportList = (props) => {
  const displayAirports = (props) => {
    const { airports } = props;

    if (airports.length > 0) {
      return airports.map((airport) => {
        console.log(airport);
        return (
          <table>
            <thead>
              <tr>
                <th>Airport Id</th>
                <th>Country</th>
                <th>City</th>
                <th>Airport Name</th>
              </tr>
            </thead>
            <tbody>
              <tr key={airport.airportId}>
                <td>{airport.airportId}</td>
                <td>{airport.country}</td>
                <td>{airport.city}</td>
                <td>{airport.airportname}</td>
              </tr>
            </tbody>
          </table>
        );
      });
    } else {
      return <h3>No Airports Yet</h3>;
    }
  };

  return <>{displayAirports(props)}</>;
};

export default AirportList;
