import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../store/auth-context";
import classes from "./LogOutButton.module.css";

const LogOutButton = (props) => {
    const ctx = useContext(AuthContext);

    return (
        <Button className={classes["log-out-button"]} onClick={props.onClick}>LogOut</Button>
    );
};

export default LogOutButton;