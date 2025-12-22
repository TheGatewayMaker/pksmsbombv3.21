// Comprehensive SEO keywords organized by category - Keywords Set 1
export const seoKeywords = {
  main: [
    "SMS Bomber",
    "SMS Spammer",
    "Pakistan SMS Spammer",
    "Pak SMS Spammer",
    "Pak SMS Bomber",
    "PK SMS Bomber",
    "SMS Bomber Pakistan",
    "Automated SMS Tool",
    "Anonymous SMS Sender",
    "Pakistani SMS Tool",
    "SMS Pranks",
    "SMS Bulk Sender",
  ],
  operators: [
    "JAZZ SMS Bomber",
    "ZONG SMS Bomber",
    "UFONE SMS Bomber",
    "Telenor SMS Bomber",
    "Warid SMS Bomber",
    "Jazz SMS Spammer",
    "Zong SMS Spammer",
    "Ufone SMS Spammer",
    "All Operators SMS Bomber",
  ],
  variations: [
    "OTP Bomber",
    "Call Bomber",
    "SMS Bomber Free",
    "SMS Bomber Online",
    "SMS Bomber APK",
    "SMS Bomber Windows",
    "Fast SMS Bomber",
    "SMS Bomber Prank",
    "SMS Bomber Tool",
    "SMS Bombing Service",
    "Best SMS Bomber",
    "SMS Bomber 2024",
    "SMS Bomber 2025",
    "SMS Bomber Download",
    "SMS Bomber Mod APK",
  ],
  features: [
    "Unlimited SMS Messages",
    "Anonymous SMS Delivery",
    "Secure SMS Bomber",
    "Easy to Use SMS Tool",
    "No Technical Knowledge Required",
    "Windows 10 Compatible",
    "Windows 11 Compatible",
    "Fast SMS Delivery",
    "Reliable SMS Service",
    "100% Success Rate",
  ],
};

// Extended SEO Keywords Set - Keywords Set 2 (from keywords2.txt)
export const seoKeywords2 = {
  apkVariations: [
    "SMS Bomber APK Mod",
    "SMS Bomber APK Download",
    "SMS Bomber App Mod APK",
    "SMS Spammer APK",
    "APKPure SMS Spammer",
    "SMS Bomber Mod Latest Version",
    "SMS Bomber APK V1.0",
    "SMS Bomber APK V2",
    "SMS Bomber APK V7",
    "SMS Bomber APK V9",
    "SMS Bomber APK Download New Version",
    "SMS Bomber App Mod APK Download",
    "Fake SMS APK",
  ],
  apiKeywords: [
    "SMS API Pakistan",
    "Cheap SMS API Pakistan",
    "Bulk SMS API",
    "SMS Caster",
    "SMS Punch API",
    "SMS Email Spammer",
    "SMS 2PK",
    "Web 2 SMS Pakistan",
    "Hamariweb SMS",
    "Bulk SMS Spammer",
  ],
  platformKeywords: [
    "Android SMS Spammer",
    "iOS SMS Spammer",
    "iPhone SMS Spammer",
    "Auto SMS Spammer",
    "Phone SMS Spammer",
    "SMS Spammer Android",
    "IPhone SMS Bomber",
    "Auto SMS Bomber",
  ],
  numberVariations: [
    "SMS Bomber 50",
    "SMS Bomber 100",
    "SMS Bomber 150",
    "SMS Bomber 300",
    "SMS Bomber 500",
    "SMS Bomber 1000",
    "SMS Bomber 5000",
    "SMS Bomber 10000",
    "100 Min SMS",
  ],
  versionTerms: [
    "SMS Bomber 2022",
    "SMS Bomber 2023",
    "SMS Bomber 2024",
    "SMS Bomber 2025",
    "SMS Bomber 2026",
    "SMS Spammer 2024",
    "SMS Spammer 2025",
    "SMS Bomber Latest Version",
    "SMS Bomber New Version",
  ],
  serviceKeywords: [
    "SMS Service",
    "SMS Package",
    "SMS Charges",
    "SMS Code",
    "SMS Alert",
    "SMS Bill",
    "SMS Unsubscribe",
    "SMS Advance Subscribe",
  ],
  regionalKeywords: [
    "Pakistan SMS Bomber",
    "PK SMS Bomber",
    "Pakistan SMS Service",
    "Pakistan Free SMS",
    "Pak SMS Service",
    "Pakistan SMS Online",
    "Online SMS Pakistan",
  ],
  longtailKeywords: [
    "Cheap SMS API Pakistan",
    "Best SMS Spammer",
    "Best SMS Bomber Free",
    "SMS Bomber Free Download",
    "Fast SMS Bomber Online",
    "How to use SMS Caster",
    "SMS Spammer Free Online",
    "SMS Bomber for Prank",
    "SMS Bombing Service Pakistan",
  ],
};

// Combined keywords string for meta tags - Set 1 only
export const combinedKeywords = Object.values(seoKeywords)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i)
  .join(", ");

// Combined keywords string - Set 2 only
export const combinedKeywords2 = Object.values(seoKeywords2)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i)
  .join(", ");

// Merged all keywords from both sets
export const allKeywords = [
  ...Object.values(seoKeywords).flat(),
  ...Object.values(seoKeywords2).flat(),
];

// Combined keywords string for maximum SEO - All keywords merged
export const combinedAllKeywords = allKeywords
  .filter((v, i, a) => a.indexOf(v) === i)
  .join(", ");

// Page-specific keyword collections
export const pageSpecificKeywords = {
  home: [
    ...seoKeywords.main,
    ...seoKeywords.operators,
    ...seoKeywords2.apkVariations.slice(0, 3),
    ...seoKeywords2.regionalKeywords,
    ...seoKeywords2.longtailKeywords.slice(0, 3),
  ],
  download: [
    ...seoKeywords.variations,
    ...seoKeywords2.apkVariations,
    ...seoKeywords2.platformKeywords,
    ...seoKeywords2.versionTerms,
    "Download SMS Bomber Now",
    "Download SMS Spammer Free",
  ],
  pricing: [
    ...seoKeywords.features,
    ...seoKeywords2.numberVariations,
    ...seoKeywords2.apiKeywords,
    "SMS Pricing",
    "SMS Package Price",
    "Bulk SMS Service",
    "Best SMS Rates",
  ],
  license: [
    ...seoKeywords.features,
    ...seoKeywords2.versionTerms,
    ...seoKeywords2.serviceKeywords,
    "License Key",
    "SMS Bomber Activation",
    "License Duration",
  ],
};

// Schema markup generators
export const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SMS Bomber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMS Bomber is Pakistan's first automated SMS spammer tool that allows you to send unlimited anonymous SMS messages to prank your friends. It supports all major Pakistani operators including JAZZ, ZONG, UFONE, WARID, and TELENOR."
        }
      },
      {
        "@type": "Question",
        "name": "Is SMS Bomber safe and anonymous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SMS Bomber is completely safe and anonymous. We use auto TOR and proxies to hide your IP address and keep your identity completely anonymous while sending SMS messages."
        }
      },
      {
        "@type": "Question",
        "name": "Which Windows versions are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMS Bomber is compatible with Windows 10 and Windows 11 (all versions). Simply download the tool and install it on your system."
        }
      },
      {
        "@type": "Question",
        "name": "Does SMS Bomber work with all Pakistani operators?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our SMS Bomber tool supports all major Pakistani operators: JAZZ, ZONG, UFONE, WARID, and TELENOR. Your SMS will be delivered reliably to any carrier."
        }
      },
      {
        "@type": "Question",
        "name": "How much does SMS Bomber cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMS Bomber offers flexible pricing plans starting from 350 PKR for 100 SMS. We also offer larger packages with discounted rates per SMS. Custom packages are available upon request."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download SMS Bomber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can download SMS Bomber from our download page. We provide compatible versions for both Windows 10 and Windows 11. The file size is approximately 25 MB."
        }
      },
      {
        "@type": "Question",
        "name": "What is the success rate of SMS Bomber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMS Bomber has a 100% success rate for SMS delivery. Our proven technology ensures reliable performance across all platforms and operators in Pakistan."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical knowledge to use SMS Bomber?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No technical knowledge is required. SMS Bomber is designed to be user-friendly and easy to use. Simply download, install, and start sending SMS messages."
        }
      }
    ]
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Helper function to inject keyword-rich content from Set 1
export const getKeywordContent = (category: keyof typeof seoKeywords) => {
  return seoKeywords[category];
};

// Helper function to get keywords from Set 2
export const getKeywordContent2 = (category: keyof typeof seoKeywords2) => {
  return seoKeywords2[category];
};

// Get page-specific keywords
export const getPageKeywords = (page: keyof typeof pageSpecificKeywords) => {
  return pageSpecificKeywords[page] || [];
};

// Get page-specific keywords as string
export const getPageKeywordsString = (page: keyof typeof pageSpecificKeywords) => {
  return getPageKeywords(page).join(", ");
};

// Get global meta keywords string (all combined)
export const getMetaKeywordsString = () => {
  return combinedAllKeywords;
};

// Helper to get keywords for a specific category
export const getKeywordsByCategory = (set: "set1" | "set2", category: string) => {
  if (set === "set1") {
    return seoKeywords[category as keyof typeof seoKeywords] || [];
  } else {
    return seoKeywords2[category as keyof typeof seoKeywords2] || [];
  }
};
