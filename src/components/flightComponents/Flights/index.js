import { useState, useEffect } from "react";
import axios from "axios";

import Flight from "../Flight";

import "./flights.css";

function FlightsTableComponent() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get("http://localhost:8080/flights/allflights").then((response) => {
      console.log("gjhbhj: ", response?.data?.data);
      setFlights(response?.data?.data);
    });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      {!flights || flights.length === 0 ? (
        <div>No flights yet</div>
      ) : (
        <div className="flights-list">
          <h2>Flights List</h2>
          {flights &&
            flights?.map((flight, i) => (
              <div key={`${flight}-${i}`}>
                <Flight flight={flight} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default FlightsTableComponent;
