import React from "react";

function Language({ language }) {
  return (
    <section>
      <h3 className="section-title">Languages</h3>
      <div>
        <p>{language}</p>
      </div>
    </section>
  );
}

export default Language;
