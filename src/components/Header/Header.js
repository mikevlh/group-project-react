import React from "react";

import "./Header.css";

import Card from "../UI/Card/Card";
import Popup from "./PopUpSignUpForm";
import PopUpSignInForm from "./PopUpSignInForm";

function Header() {
  return (
    <Card>
      <div className="header1" id="content">
        <PopUpSignInForm />
        <Popup />
        <h1>Project X</h1>
      </div>
    </Card>
  );
}

export default Header;