import React, {useState, Fragment, useRef, useContext} from "react";
import axios from "axios";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const CreatePilot = () => {
    const ctx = useContext(AuthContext);
    const fnameInputRef = useRef();
    const lnameInputRef = useRef();
    const contactNumberInputRef = useRef();
    const licenceNumberInputRef = useRef();


    const [enteredFname, setEnteredFname] = useState("");
    const [enteredLname, setEnteredLname] = useState("");
    const [enteredContactNumber, setEnteredContactNumber] = useState("");
    const [enteredLicenceNumber, setEnteredLicenceNumber] = useState("");

    const fnameChangeHandler = (event) => {
        setEnteredFname(event.target.value);
    };

    const lnameChangeHandler = (event) => {
        setEnteredLname(event.target.value);
    };

    const contactNumberChangeHandler = (event) => {
        setEnteredContactNumber(event.target.value);
    };
    const licenceNumberChangeHandler = (event) => {
        setEnteredLicenceNumber(event.target.value);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const pilotDto = {
            pilotId: 0,
            fname: enteredFname,
            lname: enteredLname,
            contactNumber: enteredContactNumber,
            licenceNumber: enteredLicenceNumber,
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/pilots/createPilot",
                pilotDto
            );
            console.log(response);
        } catch (event) {
            alert(event);
        }

        setEnteredFname("");
        setEnteredLname("");
        setEnteredContactNumber("");
        setEnteredLicenceNumber("");
    };

    return (
        <Fragment>
            <Card>
                <form onSubmit={submitHandler}>
                    <label htmlFor="fname">First Name</label>
                    <Input
                        ref={fnameInputRef}
                        type="text"
                        value={enteredFname}
                        onChange={fnameChangeHandler}
                    /><label htmlFor="lname">Last Name</label>
                    <Input
                        ref={lnameInputRef}
                        type="text"
                        value={setEnteredLname}
                        onChange={lnameChangeHandler}
                    />
                    <label htmlFor="contactNumber">Contact Number</label>
                    <Input
                        ref={contactNumberInputRef}
                        type="number"
                        value={enteredContactNumber}
                        onChange={contactNumberChangeHandler}
                    />
                    <label htmlFor="licenceNumber">License Number</label>
                    <Input
                        ref={licenceNumberInputRef}
                        type="number"
                        value={enteredLicenceNumber}
                        onChange={licenceNumberChangeHandler}
                    />
                    <Button type="submit">Create</Button>
                    <Button onClick={ctx.onLogout}>Logout</Button>
                </form>

            </Card>
        </Fragment>
    );
};

export default CreatePilot;
