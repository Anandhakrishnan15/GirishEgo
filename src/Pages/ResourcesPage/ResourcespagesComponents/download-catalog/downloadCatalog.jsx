import React from "react";
import "./downloadCat.css";
const CatalogPage = () => {
  // Array with the image and pdf urls
  const pdfs = [
    {
      title: "Catalog 1",
      pdfUrl: "/catalogs/GEC-CAT-21-01-23.pdf",
      imageUrl: "/catalogs/GEC-CAT-21-01-23-pages-images-0.jpg",
    },
    {
      title: "Catalog 2",
      pdfUrl: "/GEC New Catalog 04 02 2025AA.pdf",
      imageUrl: "/catalogs/GEC New Catalog 04 02 2025AA-pages-1.jpg",
    },
  ];
 
  return (
    <div className="catalog-page">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-item">
          <h3>{pdf.title}</h3>

          <div className="catalog-holder">
            {/* Preview Image */}
            <img
              src={pdf.imageUrl}
              alt={`Preview of ${pdf.title}`}
              className="pdf-preview-image"
            />
            
            {/* Download button */}
            <a href={pdf.pdfUrl} download className="download-btn">
              Download PDF
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogPage;
