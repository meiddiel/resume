import React from "react";
import "../Styles/Education.css";

function Education({ education }) {
  const { degree, institution, period } = education;

  return (
    <section>
      <h3>Education</h3>
      <div className="education">
        {education.map((school, index) => (
          <div key={index} className="edu-item">
            <div className="edu-left">
              <ul>
                <li>{school.period}</li>
                <li>{school.city}</li>
              </ul>
            </div>
            <div className="edu-right">
              <lu>
                <li>
                  <h4>{school.degree}</h4>
                </li>
                <li className="institu">{school.institution}</li>
              </lu>
            </div>
          </div>
        ))}
        ,
      </div>
    </section>
  );
}

export default Education;
