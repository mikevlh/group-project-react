import axios from 'axios';

const AIRPLANE_API_REST_URL = "http://localhost:8080/airplane/airplanes";
const PILOT_API_REST_URL = "http://localhost:8080/pilots/allpilots";
// const AIRPORTFLIGHT_API_URL="http://localhost:8080/airportFlight/fromToDepartDate";
const AIRPORT_API_REST_URL = "http://localhost:8080/airport/allAirports";
const AIRPORTFLIGHT_API_REST_URL = "http://localhost:8080/airportFlight/allAirportFlights";
const CLIENT_API_REST_URL = "http://localhost:8080/client/allClients";


class APIService {
    
    getAllAirplanes(){
        return axios.get(AIRPLANE_API_REST_URL);
    }

    getAllPilots(){
        return axios.get(PILOT_API_REST_URL);
    }

    getAllAirports(){
        return axios.get(AIRPORT_API_REST_URL);
    }

    getAllClients(){
        return axios.get(CLIENT_API_REST_URL);
    }

    // getAllAirportsFlights(){
    //     return axios.get(AIRPORTFLIGHT_API_REST_URL);
    // }
}

export default new APIService();