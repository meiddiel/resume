import React from "react";
import "../Styles/Experience.css";

const Experience = ({ experience }) => {
  const { company, location, date, jobTitle, responsibilities } = experience;

  return (
    <section className="experience">
      <h3 className="section-title">Experiences</h3>
      <div className="timeline">
        {experience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-left">
              <p className="date">{job.date}</p>
              <p className="location">{job.location}</p>
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-right">
              <p className="company">{job.company}</p>
              <h4 className="job-title">{job.jobTitle}</h4>
              <ul>
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
