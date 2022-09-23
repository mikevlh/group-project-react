import React from 'react'
import APIService from '../Services/APIService.js'

export default class AirplaneComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clients: []
        }
    }

    componentDidMount(){
        APIService.getAllClients().then((response) => {
            this.setState(() => {
                const clients = response.data.data;

                return { clients };
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
                <h2 className="text-center">Client Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Client Id</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.clients.map(client =>
                            <tr key={client.clientId}>
                                <td>{client.clientId}</td>
                                <td>{client.telephoneNumber}</td>
                                <td>{client.email}</td>
                                <td>{client.fname}</td>
                                <td>{client.lname}</td>
                                <td>{client.role}</td>
                                <td>{client.username}</td>
                                <td>{client.password}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}