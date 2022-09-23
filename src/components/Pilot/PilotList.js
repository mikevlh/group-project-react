import React from "react";

const PilotList = (props) => {
    const displayPilots = (props) => {
        const { pilots } = props;

        if (pilots.length > 0) {
            return pilots.map((pilot) => {
                console.log(pilot);
                return (
                    <table>
                        <thead>
                        <tr>
                            <th>Pilot Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact Number</th>
                            <th>License Number</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr key={pilot.pilotId}>
                            <td>{pilot.pilotId}</td>
                            <td>{pilot.fname}</td>
                            <td>{pilot.lname}</td>
                            <td>{pilot.contactNumber}</td>
                            <td>{pilot.licenceNumber}</td>
                        </tr>
                        </tbody>
                    </table>
                );
            });
        } else {
            return <h3>No Pilots Yet</h3>;
        }
    };

    return <>{displayPilots(props)}</>;
};

export default PilotList;
