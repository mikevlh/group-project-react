import React from 'react'
import APIService from '../Services/APIService.js'

export default class AirplaneComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             airplanes: []
        }
    }
    
    componentDidMount(){
        APIService.getAllAirplanes().then((response) => {
            this.setState(() => {
                const airplanes = response.data.data;
                
                return { airplanes };                                
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
                <h2 className="text-center">Airplane Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Airplane Id</th>
                            <th>Manufacture</th>
                            <th>Model Number</th>
                            <th>Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.airplanes.map(airplane =>
                                    <tr key={airplane.airplaneId}>
                                        <td>{airplane.airplaneId}</td>
                                        <td>{airplane.manufacture}</td>
                                        <td>{airplane.modelNumber}</td>
                                        <td>{airplane.capacity}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}