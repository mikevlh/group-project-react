import React, { useContext } from "react";

import "./Header.css";

import Card from "../UI/Card/Card";

import Popup from "./PopUpSignUpForm";
import PopUpSignInForm from "./PopUpSignInForm";
import SignInAdminButton from "./SignInAdmin/SignInAdminButton";
import AuthContext from "../../store/auth-context";
import LogOutButton from "./LogOutButton/LogOutButton";

function Header(props) {
  const ctx = useContext(AuthContext);

  return (
    <Card>
      <div className="header1" id="content">
        {/* <PopUpSignInForm />
        <Popup /> */}
        {!ctx.isLoggedIn && <SignInAdminButton onClick={props.onShowAdminForm} />}
        {ctx.isLoggedIn && <LogOutButton onClick={ctx.onLogout} />}
        <h1>Project X</h1>
      </div>
    </Card>
  );
}

export default Header;