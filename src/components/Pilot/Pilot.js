import React, { Fragment, useState, useContext, useEffect } from "react";
import Button from "../UI/Button/Button.js";
import AuthContext from "../../store/auth-context.js";
import PilotList from "./PilotList.js";
import axios from "axios";

const Pilot = () => {
    const ctx = useContext(AuthContext);
    const [pilots, setPilots] = useState([]);
    const url = "http://localhost:8080/pilots/allpilots";

    useEffect(() => {
        getPilots();
        return () => {};
    }, []);

    const getPilots = () => {
        axios
            .get(`${url}`)
            .then((response) => {
                const allPilots = response.data.data;
                setPilots(allPilots);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    return (
        <Fragment>
            <PilotList pilots={pilots} />
            <Button onClick={ctx.onLogout}>Logout</Button>
        </Fragment>
    );
};

export default Pilot;