import React, {Component, useEffect, useState} from "react";
import Card from "../UI/Card/Card";
import classes from "../Login/Login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import axios from "axios";

export default class AirportForm extends Component {
    constructor(props) {

        super(props)
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeAirportName = this.onChangeAirportName.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            country: '',
            city: '',
            airportname: ''
        }
    }

    onChangeCountry(e) {
        this.setState({country: e.target.value})
    }

    onChangeCity(e) {
        this.setState({city: e.target.value})
    }

    onChangeAirportName(e) {
        this.setState({airportname: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const airportDto = {
            country: this.state.country,
            city: this.state.city,
            airportname: this.state.airportname,
        };

        axios.post('http://localhost:8080/airport/createAirport', airportDto)
            .then((res) => {

                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });
        this.setState({country: '', city: '', airportname: ''})
    }

    render() {
        return (
            <Card className={classes.login}>
                <form onSubmit={this.onSubmit}>
                    <Input
                        // ref={emailInputRef}
                        id="country"
                        label="Country"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.country}
                        onChange={this.onChangeCountry}
                        // onBlur={validateEmailHandler}
                    />
                    <Input
                        // ref={emailInputRef}
                        id="city"
                        label="City"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.city}
                        onChange={this.onChangeCity}
                        // onBlur={validateEmailHandler}
                    />
                    <Input
                        // ref={emailInputRef}

                        id="airportname"
                        label="Airport Name"
                        type="text"
                        // isValid={emailIsValid}
                        value={this.state.airportname}
                        onChange={this.onChangeAirportName}
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