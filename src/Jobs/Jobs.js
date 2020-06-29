import React from 'react';
import Job from '../Job/Job';

const Jobs = props => {

  const jobResults = props.jobs.map( (job, index) => {
    return (
      <Job 
        company={job.company} 
        location={job.location} 
        title={job.title} 
        id={job.id} 
        url={job.url}
        key={index}/>
    )
  });

  return (
    <section className="results">
      {jobResults.length? jobResults : "No Search Results!"}
    </section>
  );

}

export default Jobs;
