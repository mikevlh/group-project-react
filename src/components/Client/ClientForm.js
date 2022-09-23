import React, {Component, useEffect, useState} from "react";
import Card from "../UI/Card/Card";
import classes from "../Login/Login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import axios from "axios";

export default class ClientForm extends Component {
    constructor(props) {

        super(props)
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            telephoneNumber: '',
            email: '',
            fname: '',
            lname: '',
            role: '',
            username: '',
            password: '',

        }
    }

    onChangeTelephone(e) {
        this.setState({telephoneNumber: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangeFirstName(e) {
        this.setState({fname: e.target.value})
    }

    onChangeLastName(e) {
        this.setState({lname: e.target.value})
    }

    onChangeRole(e) {
        this.setState({role: e.target.value})
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const clientDto = {
            telephoneNumber: this.state.telephoneNumber,
            email: this.state.email,
            fname: this.state.fname,
            lname: this.state.lname,
            role: this.state.role,
            username: this.state.username,
            password: this.state.password,
        };

        axios.post('http://localhost:8080/client/create', clientDto)
            .then((res) => {

                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });
        this.setState({telephoneNumber: '', email: '', fname: '', lname: '', role: '', username: '', password: ''})
    }

    render() {
        return (
            <Card className={classes.login}>
                <form onSubmit={this.onSubmit}>
                    <Input
                        // ref={emailInputRef}
                        id="telephoneNumber"
                        label="Telephone Number"
                        type="number"
                        // isValid={emailIsValid}
                        value={this.state.telephoneNumber}
                        onChange={this.onChangeTelephone}
                        // onBlur={validateEmailHandler}
                    />
                    <Input
                        // ref={emailInputRef}
                        id="email"
                        label="Email"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        // onBlur={validateEmailHandler}
                    />
                    <Input
                        // ref={emailInputRef}

                        id="fname"
                        label="First Name"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.fname}
                        onChange={this.onChangeFirstName}
                        // onBlur={validateEmailHandler}

                    /><Input
                        // ref={emailInputRef}

                        id="lname"
                        label="Last Name"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.lname}
                        onChange={this.onChangeLastName}
                        // onBlur={validateEmailHandler}

                    /><Input
                        // ref={emailInputRef}

                        id="role"
                        label="Role"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.role}
                        onChange={this.onChangeRole}
                        // onBlur={validateEmailHandler}

                    />
                    <Input
                        // ref={emailInputRef}

                        id="username"
                        label="Username"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        // onBlur={validateEmailHandler}

                    />
                    <Input
                        // ref={emailInputRef}

                        id="password"
                        label="Password"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        // onBlur={validateEmailHandler}

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