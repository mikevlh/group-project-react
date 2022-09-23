import React, { useState, Fragment, useRef, useContext } from "react";
import axios from "axios";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal/Modal";

const CreateAirplane = (props) => {
    const ctx = useContext(AuthContext);
  const manufactureInputRef = useRef();
  const modelNumberInputRef = useRef();
  const capacityInputRef = useRef();

  const [enteredManufacture, setEnteredManufacture] = useState("");
  const [enteredModelNumber, setEnteredModelNumber] = useState("");
  const [enteredCapacity, setEnteredCapacity] = useState("");

  const manufactureChangeHandler = (event) => {
    setEnteredManufacture(event.target.value);
  };

  const modelNumberChangeHandler = (event) => {
    setEnteredModelNumber(event.target.value);
  };

  const capacityChangeHandler = (event) => {
    setEnteredCapacity(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const airplaneDto = {
      airplaneId: 0,
      manufacture: enteredManufacture,
      modelNumber: enteredModelNumber,
      capacity: enteredCapacity,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/airplane/createairplane",
        airplaneDto
      );
      console.log(response);
    } catch (event) {
      alert(event);
    }

    setEnteredManufacture("");
        setEnteredModelNumber("");
        setEnteredCapacity("");
  };

  return (
    <Modal onClose={props.onClose}>
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="manufacture">Manufacture</label>
          <Input
            ref={manufactureInputRef}
            type="text"
            value={enteredManufacture}
            onChange={manufactureChangeHandler}
          />
          <label htmlFor="modelNumber">Model Number</label>
          <Input
            ref={modelNumberInputRef}
            type="text"
            value={enteredModelNumber}
            onChange={modelNumberChangeHandler}
          />
          <label htmlFor="capacity">Capacity</label>
          <Input
            ref={capacityInputRef}
            type="number"
            value={enteredCapacity}
            onChange={capacityChangeHandler}
          />
          <Button type="submit">Create</Button>
          <Button onClick={props.onClose}>Close</Button>
        </form>
        
      </Card>
    </Modal>
  );
};

export default CreateAirplane;
