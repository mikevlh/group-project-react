import React from "react";
import Client from "./Client";

const ClientList = (props) => {
  const displayClients = (props) => {
    const { clients } = props;

    if (clients.length > 0) {
      return clients.map((client) => {
        console.log(client);
        return (
          <table>
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
            </tbody>
          </table>
        );
      });
    } else {
      return <h3>No Clients Yet</h3>;
    }
  };

  return <>{displayClients(props)}</>;
};

export default ClientList;
