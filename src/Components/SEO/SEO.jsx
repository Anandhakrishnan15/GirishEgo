import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import defaultImage from "/catalogs/GEC New Catalog 04 02 2025AA-pages-1.jpg"; // Fallback image
import defaultLogo from "../../assets/images/GEC Logo png.png"; // Fallback logo

const SEO = ({
  title,
  description,
  image,
  siteName,
  twitterHandle,
  locale = "en_US",
  organization = "Girish Ego Controls",
  phone = "+91-XXXXXXXXXX",
  address = {
    street: "Your Street, City, State",
    locality: "Your City",
    region: "Your State",
    postalCode: "Your ZIP",
    country: "Your Country",
  },
  faqs = [],
  product = null,
  breadcrumb = [],
  url, // Now explicitly passed for validation
}) => {
  const location = useLocation();
  const validatedUrl = url
    ? url
    : `http://localhost:5173${location.pathname}`;
  const validatedImage = image || defaultImage; // Fallback to default image
  const validatedLogo = defaultLogo; // Always use default logo

  // ✅ Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organization,
    url: validatedUrl,
    logo: validatedLogo,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "Customer Support",
    },
  };

  return (
    <Helmet>
      {/* ✅ Move meta charset to the top */}
      <meta charSet="UTF-8" />

      {/* ✅ Move JSON-LD structured data script before any other scripts */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Standard SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteName} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={validatedUrl} />
      <meta property="og:image" content={validatedImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={validatedImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* Canonical Link */}
      <link rel="canonical" href={validatedUrl} />
    </Helmet>
  );
};

export default SEO;
