import React, { useState, useEffect } from "react";
import axios from "axios";
export default function HttpPost() {
  const [airportFlights, setAirportFlights] = useState([]);
  useEffect(() => {
    setAirportFlights();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const departureDate = "2022-01-25T00:00:00";
    const countryDeparture = e.target.countryDeparture.value;
    const countryArrival = e.target.countryArrival.value;

    const post = {
      params: { departureDate, countryDeparture, countryArrival },
    };
    try {
      const res = await axios.post(
          "http://localhost:8080/airportFlight/fromToDepartDate",
          null,
          post
      );
      console.log(res.data.data);
      setAirportFlights(JSON.stringify(res.data.data));

    } catch (e) {
      alert(e);
    }
  };
  return (
      <div className="container mt-2">
        <form onSubmit={onSubmit}>
          <div>
            <span>Departure Date</span>
            <input type="date" name="date" />
          </div>

          <div class="form-group">
            <label for="countryDeparture">From</label>
            <input
                type="text"
                class="form-control"
                name="countryDeparture"
                placeholder="Enter the Departure Country"
            />
          </div>
          <div class="form-group">
            <label for="countryArrival">To</label>
            <input
                type="text"
                class="form-control"
                name="countryArrival"
                placeholder="Enter the Destination"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <div>
          <h1> { airportFlights } </h1>
          <div>
            <h2 className="text-center">Flight Details From - To</h2>
            <table className="table table-striped">
              <thead>
              <tr>
                <th>Country</th>
                <th>City</th>
                <th>Airport</th>

                <th>Country</th>
                <th>City</th>
                <th>Airport</th>

                <th>Flight Id</th>
                <th>Departure</th>
                <th>Arrival</th>
              </tr>
              </thead>
              <tbody>
               {/* {
              this.state.airportFlights.map(airportFlight =>
                <tr key={airportFlight.airportFlightId}>
                  <td>{airportFlight.from1.country}</td>
                  <td>{airportFlight.from1.city}</td>
                  <td>{airportFlight.from1.airportname}</td>
                  <td>{airportFlight.to.country}</td>
                  <td>{airportFlight.to.city}</td>
                  <td>{airportFlight.to.airportname}</td>
                  <td>{airportFlight.flight.flightId}</td>
                  <td>{airportFlight.flight.departure}</td>
                  <td>{airportFlight.flight.arrival}</td>
                </tr>
              )
            }  */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}