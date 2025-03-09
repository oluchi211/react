import React, { useState} from "react";
type jobprops = {
    id:number;
    title: string
    company:string
    location:string
    salary:string
};

const JobCard: React.FC<jobprops> = ({id , title ,company ,location , salary}) =>{
    const[showDetails, setshowDetails] = useState(false);
    return(
        <div className="JobCard">
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{company}</h3>
            <h4>{location}</h4>
            <h5>{salary}</h5>
            <button onClick={() => setshowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "show Details"}
            </button>
            {showDetails && <p>{salary}</p>}
        </div>
    );
};
export default JobCard;