import axios from "axios";

export default class JobSeekerCVService{
    getCvById(id){
        return axios.get(`http://localhost:8080/api/jobseekercvs/getbyid?id=${id}`);
    }
}