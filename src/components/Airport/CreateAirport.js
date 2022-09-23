import React, { useState, Fragment, useRef, useContext } from "react";
import axios from "axios";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const CreateAirport = () => {
    const ctx = useContext(AuthContext);
  const countryInputRef = useRef();
  const cityInputRef = useRef();
  const airportnameInputRef = useRef();

  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredAirport, setEnteredAirport] = useState("");

  const countryChangeHandler = (event) => {
    setEnteredCountry(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const airportChangeHandler = (event) => {
    setEnteredAirport(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const airportDto = {
      airportId: 0,
      country: enteredCountry,
      city: enteredCity,
      airportname: enteredAirport,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/airport/createAirport",
        airportDto
      );
      console.log(response);
    } catch (event) {
      alert(event);
    }

    setEnteredCountry("");
        setEnteredCity("");
        setEnteredAirport("");
  };

  return (
    <Fragment>
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="country">Country</label>
          <Input
            ref={countryInputRef}
            type="text"
            value={enteredCountry}
            onChange={countryChangeHandler}
          />
          <label htmlFor="city">City</label>
          <Input
            ref={cityInputRef}
            type="text"
            value={enteredCity}
            onChange={cityChangeHandler}
          />
          <label htmlFor="airportname">Airport Name</label>
          <Input
            ref={airportnameInputRef}
            type="text"
            value={enteredAirport}
            onChange={airportChangeHandler}
          />
          <Button type="submit">Create</Button>
          <Button onClick={ctx.onLogout}>Logout</Button>
        </form>
        
      </Card>
    </Fragment>
  );
};

export default CreateAirport;
