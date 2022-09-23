import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../store/auth-context";
import classes from "./CreateButton.module.css";

const CreateButton = (props) => {
    const ctx = useContext(AuthContext);

    return (
        <Button className={classes["create-button"]} onClick={props.onClick}>Create</Button>
    );
};

export default CreateButton;