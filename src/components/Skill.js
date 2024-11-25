import React from "react";
import "../Styles/Skill.css";

function Skill({ skill }) {
  const { category, name, tool } = skill;

  return (
    <section className="skill">
      <h3 className="section-title">Skills</h3>
      {skill.map((category, index) => (
        <div key={index}>
          <h4 className="category">{category.category}</h4>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>
                <strong className="skill-name">{skill.name}</strong>:{" "}
                {skill.tools.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skill;
