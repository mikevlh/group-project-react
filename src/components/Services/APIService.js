import axios from 'axios';

const AIRPLANE_API_REST_URL = "http://localhost:8080/airplane/airplanes";
const PILOT_API_REST_URL = "http://localhost:8080/pilots/allpilots";

class APIService {
    
    getAllAirplanes(){
        return axios.get(AIRPLANE_API_REST_URL);
    }

    getAllPilots(){
        return axios.get(PILOT_API_REST_URL);
    }

}

export default new APIService();