import React from 'react';
import Job from '../Job/Job';

const Jobs = props => {

  const jobResults = props.jobs.map( (job, index) => {
    return <Job company={job.company} location={job.location} title={job.title} id={job.id} key={index}/>
  });

  return (
    <section className="results">
      
    </section>
  );

}

export default Jobs;
