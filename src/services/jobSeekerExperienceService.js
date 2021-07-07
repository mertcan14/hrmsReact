import axios from "axios";

export default class JobSeekerExperienceService{
    postJobSeekerExperience(jobSeekerExperience){
        return axios.post("http://localhost:8080/api/jobseekerexperience/add", {jobSeekerExperience: jobSeekerExperience});
    }
}