import React, { useState, Fragment, useRef, useContext } from "react";
import axios from "axios";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const CreateClient = () => {
    const ctx = useContext(AuthContext);
  const telephoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const roleInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [enteredTelephoneNumber, setEnteredTelephoneNumber] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFname, setEnteredFname] = useState("");
  const [enteredLname, setEnteredLname] = useState("");
  const [enteredRole, setEnteredRole] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const telephoneNumberChangeHandler = (event) => {
    setEnteredTelephoneNumber(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const fnameChangeHandler = (event) => {
    setEnteredFname(event.target.value);
  };

  const lnameChangeHandler = (event) => {
    setEnteredLname(event.target.value);
  };

  const roleChangeHandler = (event) => {
    setEnteredRole(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const clientDto = {
      clientId: 0,
      telephoneNumber: enteredTelephoneNumber,
      email: enteredEmail,
      fname: enteredFname,
      lname: enteredLname,
      role: enteredRole,
      username: enteredUsername,
      password: enteredPassword
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/client/create",
        clientDto
      );
      console.log(response);
    } catch (event) {
      alert(event);
    }

    setEnteredTelephoneNumber("");
        setEnteredEmail("");
        setEnteredFname("");
        setEnteredLname("");
        setEnteredRole("");
        setEnteredUsername("");
        setEnteredPassword("");
  };

  return (
    <Fragment>
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="telephoneNumber">Telephone Number</label>
          <Input
            ref={telephoneNumberInputRef}
            type="text"
            value={enteredTelephoneNumber}
            onChange={telephoneNumberChangeHandler}
          />
          <label htmlFor="email">Email</label>
          <Input
            ref={emailInputRef}
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label htmlFor="fname">First Name</label>
          <Input
            ref={fnameInputRef}
            type="text"
            value={enteredFname}
            onChange={fnameChangeHandler}
          />
          <label htmlFor="lname">Last Name</label>
          <Input
            ref={lnameInputRef}
            type="text"
            value={enteredLname}
            onChange={lnameChangeHandler}
          />
          <label htmlFor="role">Role</label>
          <Input
            ref={roleInputRef}
            type="text"
            value={enteredRole}
            onChange={roleChangeHandler}
          />
          <label htmlFor="username">Username</label>
          <Input
            ref={usernameInputRef}
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <Input
            ref={passwordInputRef}
            type="text"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
          <Button type="submit">Create</Button>
          <Button onClick={ctx.onLogout}>Logout</Button>
        </form>
        
      </Card>
    </Fragment>
  );
};

export default CreateClient;
