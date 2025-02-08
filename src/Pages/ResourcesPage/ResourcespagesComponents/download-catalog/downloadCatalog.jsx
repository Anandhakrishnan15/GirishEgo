import React from "react";
import { motion } from "framer-motion";
import "./downloadCat.css";
const CatalogPage = () => {
  // Array with the image and pdf urls
  const pdfs = [
    {
      title: "Space Heaters and Stem Thermostats",
      pdfUrl: "/catalogs/GIRISH EGO PANEL HEATING CATALOGS.pdf",
      imageUrl: "/catalogs/GEC-CAT-21-01-23-pages-images-0.jpg",
    },
    {
      title: "Enclosure Heaters , Din Rail Thermostats and Hygrostats",
      pdfUrl: "/catalogs/GIRISH-EGO-CONTROLLING CATALOGS.pdf",
      imageUrl: "/catalogs/GEC New Catalog 04 02 2025AA-pages-1.jpg",
    },
  ];
 
  return (
    <div className="catalog-page">
      {pdfs.map((pdf, index) => (
        <motion.div
          key={index}
          className="pdf-item"
          initial={{ opacity: 0, y: 50 }} // Start hidden and lower
          whileInView={{ opacity: 1, y: 0 }} // Fade in & move up
          transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }} // Staggered delay
          viewport={{ once: true }} // Ensures it happens only once per scroll
        >
          <h3>{pdf.title}</h3>

          <div className="catalog-holder">
            {/* Preview Image */}
            <motion.img
              src={pdf.imageUrl}
              alt={`Preview of ${pdf.title}`}
              className="pdf-preview-image"
              initial={{ opacity: 0, scale: 0.9 }} // Start smaller
              whileInView={{ opacity: 1, scale: 1 }} // Grow into view
              transition={{ duration: 0.8, delay: index * 0.3 }}
            />

            {/* Download button */}
            <motion.a
              href={pdf.pdfUrl}
              download
              className="download-btn"
              initial={{ opacity: 0, y: 20 }} // Button starts lower
              whileInView={{ opacity: 1, y: 0 }} // Moves into place
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              Download PDF
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CatalogPage;
