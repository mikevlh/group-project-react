import React from "react";
import Popup from "reactjs-popup";

import Button from "../UI/Button/Button";
import ClientDetails from "../ClientDetails/ClientDetails";

import "./PopUpSignUpForm.css";
import classes from "../ClientDetails/ClientDetails.module.css";

export default (props) => (
  
  <Popup
    trigger={<button className="sign-up-button">Sign Up</button>}
    modal
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Please, fill all the required fields</div>
        <div>
          <ClientDetails />
        </div>
        <div className="actions">
          <Popup
            // trigger={<Button className={classes.btn}> SignUp </Button>}
            position="top center"
            nested
          >
          </Popup>
        </div>
      </div>
    )}
  </Popup>

);
