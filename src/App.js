import "./Styles/Global.css";
import React, { useRef } from "react";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Language from "./components/Language";
import DriverLicence from "./components/DriverLicence";
import Footer from "./components/Footer";

function App() {
  const printRef = useRef(); // Use ref for the content to print

  return (
    <div className="App">
      {/* Content to be printed */}
      <div ref={printRef}>
        <Header header={resumeData.headers} />
        <Experience experience={resumeData.experiences} />
        <Education education={resumeData.educations} />
        <Skill skill={resumeData.skills} />
        <DriverLicence licence={resumeData.driverLicence.join(", ")} />
        <Language language={resumeData.language.join(", ")} />
      </div>
      {/* Pass printRef to Footer */}
      <Footer printRef={printRef} />
    </div>
  );
}

export default App;
