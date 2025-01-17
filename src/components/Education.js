import React from "react";
import "../Styles/Education.css";

function Education({ education }) {
  const { degree, institution, period } = education;

  return (
    <section className="education">
      <h3 className="section-title">Educations</h3>
      <div>
        {education.map((school, index) => (
          <div key={index} className="edu-item">
            <div className="edu-left">
              <p className="date">{school.period}</p>
              <p className="location">{school.city}</p>
            </div>
            <div className="edu-right">
              <h4 className="degree">{school.degree}</h4>
              <p className="institu">{school.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
