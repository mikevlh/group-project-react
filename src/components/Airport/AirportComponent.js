import React from 'react'
import APIService from '../Services/APIService.js'

export default class AirportComponent extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            airports: []
        }
    }

    componentDidMount(){
        APIService.getAllAirports().then((response) => {
            this.setState(() => {
                const airports = response.data.data;

                return { airports };
            })
            console.log(response, "response")
            console.log(response.data, "response.data")
            console.log(response.data.data, "response.data.data")

        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Airport Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Airport Id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Airport Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.airports.map(airport =>
                            <tr key={airport.airportId}>
                                <td>{airport.airportId}</td>
                                <td>{airport.country}</td>
                                <td>{airport.city}</td>
                                <td>{airport.airportname}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}