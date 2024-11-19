import React from "react";

const Experience = ({ experience }) => {
  const { position, company, period } = experience;

  return (
    <section>
      <h3>Experiences</h3>
      <lu>
        {experience.map((job, index) => (
          <li key={index}>
            <h4>
              {job.position} at {job.company}
            </h4>
            <p>{job.period}</p>
          </li>
        ))}
      </lu>
    </section>
  );
};

export default Experience;
