import axios from "axios";

export default class JobSeekerEducationService{
    postJobSeekerEducation(jobSeekerEducation){
        return axios.post("http://localhost:8080/api/jobseekereducations/add", {jobSeekerEducation: jobSeekerEducation});
    }
}