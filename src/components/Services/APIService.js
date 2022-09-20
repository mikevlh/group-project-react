import axios from 'axios';

const AIRPLANE_API_REST_URL = "http://localhost:8080/airplane/airplanes";

class APIService {
    
    getAllAirplanes(){
        return axios.get(AIRPLANE_API_REST_URL);
    }

}

export default new APIService();