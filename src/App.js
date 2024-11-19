import "./Styles/Global.css";
import React from "react";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Header header={resumeData.headers} />
      <Experience experience={resumeData.experiences} />
      <Education education={resumeData.educations} />
      <Skill skill={resumeData.skills} />
      <p>Language : {resumeData.language.join(", ")} </p>
    </div>
  );
}

export default App;
