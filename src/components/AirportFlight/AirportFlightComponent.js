// import React, {useState, useEffect} from "react";
// import axios from "axios";
//
// export default class HttpPost extends React.Component {
//
//     constructor(props) {
//         super(props)
//
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             airportFlights: []
//         }
//     }
//
//     componentDidMount() {
//         const post = {
//             params: {departureDate, countryDeparture, countryArrival},
//         };
//
//         axios.post("http://localhost:8080/airportFlight/fromToDepartDate",
//             null,
//             post).then((response) => {
//             this.setState(() => {
//                 const airportFlights = response.data.data;
//
//                 return {airportFlights};
//             })
//             console.log(response, "response")
//             console.log(response.data, "response.data")
//             console.log(response.data.data, "response.data.data")
//         }).catch(function (ex) {
//             console.log('Response parsing failed. Error: ', ex);
//
//         })
//
//
//     }
//     render() {
//         return(
//
//             <div className="container mt-2">
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <span>Departure Date</span>
//                         <input type="date" name="date"/>
//                     </div>
//
//                     <div className="form-group">
//                         <label htmlFor="countryDeparture">From</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="countryDeparture"
//                             placeholder="Enter the Departure Country"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="countryArrival">To</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="countryArrival"
//                             placeholder="Enter the Destination"
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         Submit
//                     </button>
//                 </form>
//                 <div>
//                     <h1> {airportFlights} </h1>
//                     <div>
//                         <h2 className="text-center">Flight Details From - To</h2>
//                         <table className="table table-striped">
//                             <thead>
//                             <tr>
//                                 <th>Country</th>
//                                 <th>City</th>
//                                 <th>Airport</th>
//
//                                 <th>Country</th>
//                                 <th>City</th>
//                                 <th>Airport</th>
//
//                                 <th>Flight Id</th>
//                                 <th>Departure</th>
//                                 <th>Arrival</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {
//
//                                 this.state.airportFlights.map(airportFlight =>
//                                     <tr key={airportFlight.airportFlightId}>
//                                         <td>{airportFlight.from1.country}</td>
//                                         <td>{airportFlight.from1.city}</td>
//                                         <td>{airportFlight.from1.airportname}</td>
//                                         <td>{airportFlight.to1.country}</td>
//                                         <td>{airportFlight.to1.city}</td>
//                                         <td>{airportFlight.to1.airportname}</td>
//                                         <td>{airportFlight.flight.flightId}</td>
//                                         <td>{airportFlight.flight.departure}</td>
//                                         <td>{airportFlight.flight.arrival}</td>
//                                     </tr>
//                                 )
//
//                             }
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//
//         )
//     }
//
//
//
// }