import "../Styles/Footer.css";
import React from "react";
import { useReactToPrint } from "react-to-print";

const Footer = ({ printRef }) => {
  const currentYear = new Date().getFullYear();

  // Correctly use the useReactToPrint hook
  const handlePrint = useReactToPrint({
    content: () => printRef, // Pass the reference directly
  });

  return (
    <footer>
      {/* Button for downloading the PDF */}
      <button className="download-button" onClick={handlePrint}>
        Download as PDF
      </button>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
