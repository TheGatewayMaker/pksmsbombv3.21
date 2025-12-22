// Comprehensive SEO keywords organized by category
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

// Combined keywords string for meta tags
export const combinedKeywords = Object.values(seoKeywords)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i)
  .join(", ");

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

// Helper function to inject keyword-rich content
export const getKeywordContent = (category: keyof typeof seoKeywords) => {
  return seoKeywords[category];
};
