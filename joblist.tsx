import React from "react";
import JobCard from "./jobcard";
import { jobs } from "../data/job";

 const JobList: React.FC = () => {
    return (
        <div>
            <h1>Job list</h1>
            {jobs.length > 0 ?
            (jobs.map((job) => (
                <JobCard
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                />
            ))
        ):(
            <p>no jobs available at the moment.</p>
            )}
        </div>
    );
 };

 export default JobList;