import React from 'react'
import APIService from '../Services/APIService.js'

export default class PilotComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pilots: []
        }
    }

    componentDidMount(){
        APIService.getAllPilots().then((response) => {
            this.setState(() => {
                const pilots = response.data.data;

                return { pilots };
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
                <h2 className="text-center">Pilot Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Pilot Id</th>
                        <th>License Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.pilots.map(pilot =>
                            <tr key={pilot.pilotId}>
                                <td>{pilot.pilotId}</td>
                                <td>{pilot.licenceNumber}</td>
                                <td>{pilot.fname}</td>
                                <td>{pilot.lname}</td>
                                <td>{pilot.contactNumber}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }



}