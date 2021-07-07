import axios from "axios";

export default class JobAdvertisementService{

    getAdvertisement(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }
}