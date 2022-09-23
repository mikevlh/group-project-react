import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../store/auth-context";
import classes from "./ShowListButton.module.css";

const CreateButton = (props) => {
    const ctx = useContext(AuthContext);

    return (
        <Button className={classes["show-list-button"]} onClick={props.onClick}>Show</Button>
    );
};

export default CreateButton;