import axios from "axios";

export default class AuthService{
    postRegisterEmployer(employer, passwordConfirm){
        return axios.post("http://localhost:8080/api/auths/registeremployer", {employer: employer, passwordConfirm: passwordConfirm});
    }

    postRegisterJobSeeker(jobSeeker, passwordConfirm){
        return axios.post("http://localhost:8080/api/auths/registerjobseeker", {jobSeeker: jobSeeker, passwordConfirm: passwordConfirm});
    }
}