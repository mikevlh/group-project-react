import "./flight.css";

const Flight = (flight) => {
  return (
    <div className="flight-container">
      <span className="flight">Flight Id: {flight?.flight?.flightId}</span>
      <span>Flight Departure: {flight?.flight?.departure}</span>
      <span>Flight Arrival: {flight?.flight?.arrival}</span>
      <br />
    </div>
  );
};

export default Flight;
