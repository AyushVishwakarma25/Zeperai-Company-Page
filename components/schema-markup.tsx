export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZeperAI",
    url: "https://zeperai.com",
    logo: "https://zeperai.com/logo-zeperai.png",
    description: "AI-powered creative agency helping D2C and e-commerce brands sell more with high-converting ad creatives, Reels editing, and Shopify design.",
    sameAs: [
      "https://twitter.com/zeperai",
      "https://linkedin.com/company/zeperai",
      "https://instagram.com/zeperai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@zeperai.com",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "AI Ad Creatives",
        description: "AI-powered advertisement creatives that look real and feel story-driven",
        provider: {
          "@type": "Organization",
          name: "ZeperAI",
        },
      },
      {
        "@type": "Service",
        name: "Motion Graphic Ads",
        description: "Product motion graphic ads built for attention and retention",
        provider: {
          "@type": "Organization",
          name: "ZeperAI",
        },
      },
      {
        "@type": "Service",
        name: "Reels Editing",
        description: "Reels editing that keeps people watching and drives engagement",
        provider: {
          "@type": "Organization",
          name: "ZeperAI",
        },
      },
      {
        "@type": "Service",
        name: "Creative Strategy",
        description: "Scripting and creative strategy designed to improve CTR and ROAS",
        provider: {
          "@type": "Organization",
          name: "ZeperAI",
        },
      },
      {
        "@type": "Service",
        name: "Shopify Website Design",
        description: "Shopify website design and development built for D2C brands",
        provider: {
          "@type": "Organization",
          name: "ZeperAI",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
    </>
  );
}
