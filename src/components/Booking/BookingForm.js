import React, { PureComponent } from "react";
import DatePicker from "react-datepicker";

import {
  // GuestSelect,
  LocationSelect,
  // useReactBookingForm
} from "react-booking-form";

import "./Search.css";

import Card from "../UI/Card/Card";
import "react-datepicker/dist/react-datepicker.css";

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      depDate: null,
      arrDate: null,
    };
    this.handleDepDate = this.handleDepDate.bind(this);
    this.handleArrDate = this.handleArrDate.bind(this);
  }

  handleDepDate(date) {
    this.setState({
      depDate: date,
    });
  }

  handleArrDate(date) {
    this.setState({
      arrDate: date,
    });
  }

  render() {
    return (
      <Card>
        <div className="search">
          <div className="search--tabs">
            <button className="active">One Way</button>
            <button>Return</button>
          </div>
          <div className="search--form">
            <input type="text" placeholder="Origin City" />
            <input type="text" placeholder="Enter Destination City" />
            <DatePicker
              selected={this.state.depDate}
              onChange={this.handleDepDate}
              placeholderText="Departure Date"
            />
            <DatePicker
              selected={this.state.arrDate}
              onChange={this.handleArrDate}
              placeholderText="Arrival Date"
            />
            <input type="number" placeholder="No Of Passengers" />
            <button className="btn">Search</button>
          </div>
        </div>
      </Card>
    );
  }
}

export default Search;
