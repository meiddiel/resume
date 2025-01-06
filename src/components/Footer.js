import "../Styles/Footer.css";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Footer = ({ printRef }) => {
  const currentYear = new Date().getFullYear();

  const handlePrint = () => {
    const input = printRef.current;
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
      });
    }
  };

  return (
    <footer>
      {/* Button for downloading the PDF */}
      <button className="download-button" onClick={handlePrint}>
        Download as PDF
      </button>
      <p className="copyright">Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
