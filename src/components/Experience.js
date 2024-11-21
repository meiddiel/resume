import React from "react";
import "../Styles/Experience.css";

const Experience = ({ experience }) => {
  const { company, location, date, jobTitle, responsibilities } = experience;

  return (
    <section className="experience">
      <h3>Work Experience</h3>
      <div className="timeline">
        {experience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="experience-details">
                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>
                <p className="date">{job.date}</p>
              </div>
              <div className="role-details">
                <h4 className="job-title">{job.jobTitle}</h4>
                <ul>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
