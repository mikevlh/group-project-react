import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import AuthContext from "../../../store/auth-context";
import classes from "./SignInAdminButton.module.css";

const SignInAdminButton = (props) => {
    const ctx = useContext(AuthContext);

    return (
        <Button className={classes["sign-in-button"]} onClick={props.onClick}>Admin</Button>
    );
};

export default SignInAdminButton;