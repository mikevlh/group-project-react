import React, {Component, useEffect, useState} from "react";
import Card from "../UI/Card/Card";
import classes from "../Login/Login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import axios from "axios";
import Popup from "reactjs-popup";

export default class PilotForm extends Component {
    constructor(props) {

        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeLicenseNumber = this.onChangeLicenseNumber.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fname: '',
            lname: '',
            contactNumber: '',
            licenceNumber: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({fname: e.target.value})
    }

    onChangeLastName(e) {
        this.setState({lname: e.target.value})
    }

    onChangeContactNumber(e) {
        this.setState({contactNumber: e.target.value})
    }

    onChangeLicenseNumber(e) {
        this.setState({licenceNumber: e.target.value})
    }


    onSubmit(e) {
        e.preventDefault()
        const pilotDto = {
            fname: this.state.fname,
            lname: this.state.lname,
            contactNumber: this.state.contactNumber,
            licenceNumber: this.state.licenceNumber
        };

        axios.post('http://localhost:8080/pilots/createPilot', pilotDto)
            .then((res) => {

                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });
        this.setState({fname: '', lname: '', contactNumber: '', licenceNumber: ''})
    }

    render() {
        return (
            <Card className={classes.login}>
                <form onSubmit={this.onSubmit}>
                    <Input
                        // ref={emailInputRef}
                        id="fname"
                        label="First Name"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.fname}
                        onChange={this.onChangeFirstName}
                        // onBlur={validateEmailHandler}
                    />
                    <Input
                        // ref={passwordInputRef}
                        id="lname"
                        label="Last Name"
                        type="text"
                        // isValid={passwordIsValid}
                        value={this.state.lname}
                        onChange={this.onChangeLastName}
                        // onBlur={validatePasswordHandler}
                    />
                    <Input
                        // ref={passwordInputRef}
                        id="contactNumber"
                        label="Contact Number"
                        type="text"
                        // isValid={passwordIsValid}
                        value={this.state.contactNumber}
                        onChange={this.onChangeContactNumber}
                        // onBlur={validatePasswordHandler}
                    />
                    <Input
                        // ref={passwordInputRef}
                        id="licenceNumber"
                        label="Licence Number"
                        type="text"
                        // isValid={passwordIsValid}
                        value={this.state.licenceNumber}
                        onChange={this.onChangeLicenseNumber}
                        // onBlur={validatePasswordHandler}
                    />
                    <div className={classes.actions}>
                        <Button type="submit" className={classes.btn}>
                            Create
                        </Button>
                    </div>

                </form>
            </Card>
        );
    }
}