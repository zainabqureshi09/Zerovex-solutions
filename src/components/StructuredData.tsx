import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zerovex Solutions",
    "alternateName": "Zerovex",
    "url": "https://zerovexsolutions.site",
    "logo": "https://zerovexsolutions.site/logo.png",
    "description": "Premium digital agency specializing in custom web development, mobile apps, AI automation, and UI/UX design.",
    "foundingDate": "2020",
    "sameAs": [
      "https://linkedin.com/company/zerovexsolutions",
      "https://twitter.com/zerovexsolutions",
      "https://instagram.com/zerovexsolutions",
      "https://github.com/zerovexsolutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "Customer Service",
      "email": "hello@zerovexsolutions.site",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Silicon Valley",
      "addressRegion": "California",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "AI Automation",
      "UI/UX Design",
      "Business Process Automation",
      "Digital Transformation"
    ],
    "serviceType": [
      "Website Development",
      "Web Application Development",
      "Mobile App Development",
      "Graphic Design & Branding",
      "AI Solutions & Automation",
      "Business Process Automation"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zerovex Solutions",
    "url": "https://zerovexsolutions.site",
    "description": "Premium digital agency specializing in custom web development, mobile apps, AI automation, and UI/UX design.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zerovexsolutions.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zerovex Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zerovexsolutions.site/logo.png"
      }
    }
  };

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
