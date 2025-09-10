import React from "react";

function DriverLicence({ licence }) {
  return (
    <section className="driver-licence">
      <h2 className="section-title">Driver Licence</h2>
      <p>{licence}</p>
    </section>
  );
}

export default DriverLicence;