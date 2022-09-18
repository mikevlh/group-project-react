import React, { useRef, useState, useReducer, useEffect } from "react";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import {
  nameValidation,
  telephoneValidation,
  emailValidation,
  usernameValidation,
  passwordValidation
} from "../UI/Validation/Regex";

import classes from "./ClientDetails.module.css";

const firsNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: nameValidation.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: nameValidation.test(state.value) };
  }
  return { value: "", isValid: false };
};

const lastNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: nameValidation.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: nameValidation.test(state.value) };
  }
  return { value: "", isValid: false };
};

const telephoneReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: telephoneValidation.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: telephoneValidation.test(state.value),
    };
  }
  return { value: "", isValid: false };
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: emailValidation.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: emailValidation.test(state.value) };
  }
  return { value: "", isValid: false };
};

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: usernameValidation.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: usernameValidation.test(state.value) };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: passwordValidation.test(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: passwordValidation.test(state.value) };
  }
  return { value: "", isValid: false };
};

const ClientDetails = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const telephoneInputRef = useRef();
  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [firstNameState, dispatchFirstName] = useReducer(firsNameReducer, {
    value: "",
    isValid: null,
  });

  const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
    value: "",
    isValid: null,
  });

  const [telephoneState, dispatchTelephone] = useReducer(telephoneReducer, {
    value: "",
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: firstNameIsValid } = firstNameState;
  const { isValid: lastNameIsValid } = lastNameState;
  const { isValid: telephoneIsValid } = telephoneState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: usernameIsValid } = usernameState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        firstNameIsValid && lastNameIsValid && telephoneIsValid && emailIsValid && usernameIsValid && passwordIsValid
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [firstNameIsValid, lastNameIsValid, telephoneIsValid, emailIsValid, usernameIsValid, passwordIsValid]);

  const firstNameChangeHandler = (event) => {
    dispatchFirstName({ type: "USER_INPUT", val: event.target.value });
  };

  const lastNameChangeHandler = (event) => {
    dispatchLastName({ type: "USER_INPUT", val: event.target.value });
  };

  const telephoneChangeHandler = (event) => {
    dispatchTelephone({ type: "USER_INPUT", val: event.target.value });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateFirstNameHandler = () => {
    dispatchFirstName({ type: "INPUT_BLUR" });
  };

  const validateLastNameHandler = () => {
    dispatchLastName({ type: "INPUT_BLUR" });
  };

  const validateTelephoneHandler = () => {
    dispatchTelephone({ type: "INPUT_BLUR" });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    if (!firstNameIsValid) {
      firstNameInputRef.current.focus();
    }
    if (!lastNameIsValid) {
      lastNameInputRef.current.focus();
    }
    if (!telephoneIsValid) {
      telephoneInputRef.current.focus();
    }
    if (!emailIsValid) {
      emailInputRef.current.focus();
    }
    if (!usernameIsValid) {
      usernameInputRef.current.focus();
    }
    if (!passwordIsValid) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.client}>
      <form onSubmit={submitHandler} id="ClientDetails">
        <Input
          ref={firstNameInputRef}
          id="firstName"
          label="First Name:"
          type="text"
          isValid={firstNameIsValid}
          value={firstNameState.value}
          onChange={firstNameChangeHandler}
          onBlur={validateFirstNameHandler}
        />
        <Input
          ref={lastNameInputRef}
          id="lastName"
          label="Last Name:"
          type="text"
          isValid={lastNameIsValid}
          value={lastNameState.value}
          onChange={lastNameChangeHandler}
          onBlur={validateLastNameHandler}
        />
        <Input
          ref={telephoneInputRef}
          id="telephone"
          label="Tel. Number:"
          type="text"
          isValid={telephoneIsValid}
          value={telephoneState.value}
          onChange={telephoneChangeHandler}
          onBlur={validateTelephoneHandler}
        />
        <Input
          ref={emailInputRef}
          id="email"
          label="Email:"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={usernameInputRef}
          id="username"
          label="User name:"
          type="username"
          isValid={usernameIsValid}
          value={usernameState.value}
          onChange={usernameChangeHandler}
          onBlur={validateUsernameHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Pass word:"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </form>
    </Card>
  );
};

export default ClientDetails;