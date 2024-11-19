import React from "react";

function Skill({ skill }) {
  const { category, name, tool } = skill;

  return (
    <section>
      <h3>Skills</h3>
      {skill.map((category, index) => (
        <div key={index}>
          <h4>{category.category}</h4>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>
                <strong>{skill.name}</strong>: {skill.tools.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skill;
