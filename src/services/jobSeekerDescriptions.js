import axios from "axios";

export default class jobSeekerDescriptionService{
    postJobSeekerDescription(jobSeekerDescription){
        return axios.post("http://localhost:8080/api/jobseekerdescriptions/add", {jobSeekerDescription: jobSeekerDescription});
    }
}