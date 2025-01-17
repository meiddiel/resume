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
        const pdf = new jsPDF("p", "mm", "A4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const ratio = canvasWidth / pdfWidth;

        let position = 0;
        let remainingHeight = canvasHeight;

        while (remainingHeight > 0) {
          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = canvasWidth;
          pageCanvas.height = pdfHeight * ratio;

          const pageContext = pageCanvas.getContext("2d");
          pageContext.drawImage(
            canvas,
            0,
            position * ratio,
            canvasWidth,
            pdfHeight * ratio,
            0,
            0,
            canvasWidth,
            pdfHeight * ratio
          );

          const pageData = pageCanvas.toDataURL("image/png");
          pdf.addImage(pageData, "PNG", 0, 0, pdfWidth, pdfHeight);

          remainingHeight -= pdfHeight * ratio;
          position += pdfHeight;

          if (remainingHeight > 0) {
            pdf.addPage();
          }
        }

        // (canvas.height * pdfWidth) / canvas.width;
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
