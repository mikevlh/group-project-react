import React from "react";
import Popup from "reactjs-popup";

import Login from "../Login/Login";
import Button from "../UI/Button/Button";

import "./PopUpSignInForm.css";
import classes from "../Login/Login.module.css";

export default (props) => (
  <Popup className="SignIn" trigger={<button className="sign-in-button">Sign In</button>} modal>
    {(close) => (
      <div className="modal1">
        <button className="close1" onClick={close}>
          &times;
        </button>
        <div className="header1">Please, type your Credentials:</div>
        <div className="content1">
          <Login />
        </div>
        <div className="actions1">
          <Popup
            trigger={<Button className={classes.btn}>SignIn</Button>}
            position="top center"
            nested
          ></Popup>
        </div>
      </div>
    )}
  </Popup>
);