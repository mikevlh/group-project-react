import React, { Fragment, useState, useContext, useEffect } from "react";
import Button from "../UI/Button/Button.js";
import AuthContext from "../../store/auth-context.js";
import AirportList from "./AirportList.js";
import axios from "axios";

const Airport = () => {
  const ctx = useContext(AuthContext);
  const [airports, setAirports] = useState([]);
  const url = "http://localhost:8080/airport/allAirports";

  useEffect(() => {
    getAirports();
    return () => {};
  }, []);

  const getAirports = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allAirports = response.data.data;
        setAirports(allAirports);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <Fragment>
      <AirportList airports={airports} />
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Fragment>
  );
};

export default Airport;
