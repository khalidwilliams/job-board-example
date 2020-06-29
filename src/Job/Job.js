import React from 'react';

const Job = props => {
  const { company, location, title, id } = props;

  return (
    <article id={id}>
      <h1>{title}</h1>
      <h2> at {company}</h2>
      <h3> in {location}</h3>
    </article>
  )
}

export default Job;
