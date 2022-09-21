import React, { Component } from "react";
import { cities } from "./cities";

class Booking extends Component {
  componentDidMount() {
    fetch("https://tw-frontenders.firebaseio.com/advFlightSearch.json")
      .then((response) => response.json())
      .then((responseData) =>
        this.setState(
          {
            data: responseData,
          },
          this.getCities.bind(this)
        )
      );
  }
  getCities() {
    let cities = new Set();
    let data = this.state.data;
    data.forEach((element) => {
      cities.add(element.destination);
      cities.add(element.origin);
    });
    this.setState({
      cities: Array.from(cities),
    });
  }
  render() {
    return (
      <div className="Booking">
          <Search />
      </div>
    );
  }
}

export default Booking;