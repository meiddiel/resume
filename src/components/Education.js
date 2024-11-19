import React from "react";

function Education({ education }) {
  const { degree, institution, period } = education;

  return (
    <section>
      <h3>Education</h3>
      <lu>
        {education.map((school, index) => (
          <li key={index}>
            <h4>
              {school.degree} at {school.institution}
            </h4>
            <p> {school.period} </p>
          </li>
        ))}
      </lu>
    </section>
  );
}

export default Education;
