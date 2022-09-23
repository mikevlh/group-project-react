import React, { Fragment, useState, useContext, useEffect } from "react";
import Button from "../UI/Button/Button.js";
import AuthContext from "../../store/auth-context.js";
import AirplaneList from "./AirplaneList.js";
import axios from "axios";

const Airplane = () => {
  const ctx = useContext(AuthContext);
  const [airplanes, setAirplanes] = useState([]);
  const url = "http://localhost:8080/airplane/airplanes";

  useEffect(() => {
    getAirplanes();
    return () => {};
  }, []);

  const getAirplanes = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allAirplanes = response.data.data;
        setAirplanes(allAirplanes);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <Fragment>
      <AirplaneList airplanes={airplanes} />
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Fragment>
  );
};

export default Airplane;
