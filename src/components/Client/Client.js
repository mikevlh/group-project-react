import React, { Fragment, useState, useContext, useEffect } from "react";
import Button from "../UI/Button/Button.js";
import AuthContext from "../../store/auth-context.js";
import ClientList from "./ClientList";
import axios from "axios";

const Client = () => {
  const ctx = useContext(AuthContext);
  const [clients, setClients] = useState([]);
  const url = "http://localhost:8080/client/allClients";

  useEffect(() => {
    getClients();
    return () => {};
  }, []);

  const getClients = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allClients = response.data.data;
        setClients(allClients);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <Fragment>
      <ClientList clients={clients} />
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Fragment>
  );
};

export default Client;
