import React from 'react';
import './Job.css';

const Job = props => {
  const { company, url, location, title, id } = props;

  return (
    <article id={id}>
      <h1>{title}</h1>
      <h2> at {company}</h2>
      <h3> in {location}</h3>
      <a href={url} target="_blank">See more</a>
    </article>
  )
}

export default Job;
