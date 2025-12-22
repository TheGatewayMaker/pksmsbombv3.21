import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content and Image - Integrated Layout */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-black text-slate-100 leading-tight text-center lg:text-left">
                Pakistan's First
                <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  SMS Spammer
                </span>
                <span className="block text-slate-100">Tool</span>
              </h1>
            </div>
          </div>

          {/* Pumpkin Image - Integrated with Text */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end lg:mt-12 flex-shrink-0">
            <div className="w-56 md:w-72 lg:w-80 xl:w-96">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5aae9acb8c5d450e964b76328688b687%2Fa80312c5d1854423ae670c9e53b58958?format=webp&width=800"
                alt="SMS Bomber Pumpkin"
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter:
                    "drop-shadow(0 0px 100px rgba(249, 115, 22, 0.8)), drop-shadow(0 0px 60px rgba(239, 68, 68, 0.6)), drop-shadow(0 0px 30px rgba(249, 115, 22, 0.4))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Description and CTAs */}
        <div className="mt-4 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-medium mb-8">
            Automated SMS Bomber made specially to prank your friends. Send
            unlimited SMS messages with our secure, anonymous, and easy-to-use
            tool. No technical knowledge required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/download"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Now
            </Link>
            <a
              href="https://wa.me/message/XMTA7ADWNLB2D1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-3 border-orange-500 text-orange-400 font-black rounded-xl hover:bg-orange-500/10 transition-all duration-300 whitespace-nowrap"
            >
              Contact WhatsApp
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Operators Section */}
      <section className="py-12 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {["JAZZ", "ZONG", "UFONE", "WARID", "TELENOR"].map((operator) => (
              <div
                key={operator}
                className="text-lg lg:text-2xl font-black text-white whitespace-nowrap"
              >
                {operator}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-transparent via-slate-800/40 to-slate-900/60 backdrop-blur-xl border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-slate-100 mb-20">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
              <div className="text-6xl md:text-7xl mb-6">⚡</div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                Windows Compatible
              </h3>
              <p className="text-base lg:text-lg text-slate-300 leading-relaxed font-medium">
                Automated SMS Bomber works for both Windows 10 & 11 with minimal
                internet required. Fast, reliable, and optimized for
                performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
              <div className="text-6xl md:text-7xl mb-6">📱</div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                All Operators Supported
              </h3>
              <p className="text-base lg:text-lg text-slate-300 leading-relaxed font-medium">
                Our SMS Spammer Tool supports all major operators: JAZZ, WARID,
                UFONE, ZONG & TELENOR. Works with any carrier in Pakistan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
              <div className="text-6xl md:text-7xl mb-6">🔒</div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                Completely Anonymous
              </h3>
              <p className="text-base lg:text-lg text-slate-300 leading-relaxed font-medium">
                Our tool is entirely anonymous, keeping your IP hidden using
                auto TOR & proxies to bypass limitations. Your privacy is
                guaranteed.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
              <div className="text-6xl md:text-7xl mb-6">✅</div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                100% Success Rate
              </h3>
              <p className="text-base lg:text-lg text-slate-300 leading-relaxed font-medium">
                Guaranteed delivery of SMS messages with our proven and tested
                technology. Reliable performance across all platforms and
                operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-slate-100 mb-6">
          Simple & Transparent Pricing
        </h2>
        <p className="text-center text-slate-300 mb-16 lg:mb-20 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
          Choose the SMS package that fits your needs. All packages include
          anonymous delivery.
        </p>

        <div className="overflow-x-auto rounded-3xl border border-orange-500/30 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-orange-600/30 via-red-600/30 to-orange-600/30 border-b border-orange-500/40">
                <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left font-black text-slate-100 text-xs sm:text-sm lg:text-lg">
                  SMS Package
                </th>
                <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center font-black text-slate-100 text-xs sm:text-sm lg:text-lg">
                  Price (PKR)
                </th>
                <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center font-black text-slate-100 text-xs sm:text-sm lg:text-lg">
                  Per SMS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-500/20">
              <tr className="hover:bg-orange-500/15 transition-all duration-300 group cursor-pointer">
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 font-bold text-slate-200 text-xs sm:text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  100 SMS
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center font-black text-orange-400 text-sm sm:text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  350 PKR
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center text-slate-300 text-xs sm:text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  3.5 PKR
                </td>
              </tr>
              <tr className="bg-orange-500/8 hover:bg-orange-500/20 transition-all duration-300 group cursor-pointer">
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 font-bold text-slate-200 text-xs sm:text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  250 SMS
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center font-black text-orange-400 text-sm sm:text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  800 PKR
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center text-slate-300 text-xs sm:text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  3.2 PKR
                </td>
              </tr>
              <tr className="hover:bg-orange-500/15 transition-all duration-300 group cursor-pointer">
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 font-bold text-slate-200 text-xs sm:text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  400 SMS
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center font-black text-orange-400 text-sm sm:text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  1,200 PKR
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center text-slate-300 text-xs sm:text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  3.0 PKR
                </td>
              </tr>
              <tr className="bg-orange-500/8 hover:bg-orange-500/20 transition-all duration-300 group cursor-pointer">
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 font-bold text-slate-200 text-xs sm:text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  1,000 SMS
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center font-black text-orange-400 text-sm sm:text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  2,600 PKR
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center text-slate-300 text-xs sm:text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  2.6 PKR
                </td>
              </tr>
              <tr className="hover:bg-orange-500/15 transition-all duration-300 group cursor-pointer">
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 font-bold text-slate-200 text-xs sm:text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  2,000 SMS
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center font-black text-orange-400 text-sm sm:text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  4,800 PKR
                </td>
                <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-center text-slate-300 text-xs sm:text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  2.4 PKR
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 p-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl">
          <p className="text-center text-slate-300 mb-8 text-xl font-semibold">
            Need a custom SMS count? We can help!
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/message/XMTA7ADWNLB2D1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 lg:px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-sm lg:text-base rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all whitespace-nowrap"
            >
              Contact WhatsApp
              <ExternalLink className="ml-2 lg:ml-3 w-4 lg:w-5 h-4 lg:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 my-16 lg:my-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/95 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Download our tool today and start pranking your friends with
            unlimited SMS messages. It's easy, secure, and completely anonymous.
          </p>
          <Link
            to="/download"
            className="inline-flex items-center justify-center px-8 lg:px-12 py-4 lg:py-5 bg-white text-orange-600 font-black text-sm lg:text-lg rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 whitespace-nowrap"
          >
            Download Now
          </Link>
        </div>
      </section>

      {/* SEO Hidden Content Section */}
      <div className="hidden" data-seo="true" role="doc-note">
        <h2>SMS Bomber - Complete Solution for Pakistan</h2>
        <p>
          Our SMS Bomber is Pakistan's first automated SMS spammer tool that works with all major operators:
          SMS Bomber JAZZ, SMS Bomber ZONG, SMS Bomber UFONE, SMS Bomber WARID, SMS Bomber TELENOR.
        </p>
        <p>
          Whether you're looking for a free SMS bomber, SMS bomber APK, SMS bomber online, SMS bomber Windows,
          fast SMS bomber, SMS bomber prank, SMS bomber tool, or SMS bombing service - we have the solution.
        </p>
        <p>
          Our SMS Spammer tool offers unlimited SMS messages with anonymous delivery. Available as SMS Bomber 2024,
          SMS Bomber 2025, SMS Bomber Mod APK, and more. Perfect for SMS pranks, OTP bombing, and call bombing.
        </p>
        <p>
          Compatible with Windows 10 and Windows 11. Download our SMS Bomber now and enjoy secure, anonymous SMS sending.
          Best SMS Bomber for Pakistani users seeking reliable SMS bombing service with 100% success rate.
        </p>
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is SMS Bomber and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SMS Bomber is Pakistan's first automated SMS spammer tool that allows you to send unlimited anonymous SMS messages. Simply select your SMS package, contact us via WhatsApp, make payment, and start using the tool immediately."
                }
              },
              {
                "@type": "Question",
                "name": "Which operators does SMS Bomber support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SMS Bomber supports all major Pakistani operators: JAZZ SMS Bomber, ZONG SMS Bomber, UFONE SMS Bomber, WARID SMS Bomber, and TELENOR SMS Bomber. Your SMS will be delivered reliably to any carrier."
                }
              },
              {
                "@type": "Question",
                "name": "Is SMS Bomber completely anonymous?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SMS Bomber is completely anonymous. We use auto TOR and proxies to hide your IP address, keeping your identity completely protected while sending SMS messages."
                }
              },
              {
                "@type": "Question",
                "name": "What Windows versions are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SMS Bomber is compatible with Windows 10 and Windows 11 (all versions). The tool requires Chrome browser to be installed on your system."
                }
              },
              {
                "@type": "Question",
                "name": "How much does SMS Bomber cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SMS Bomber offers transparent pricing: 100 SMS for 350 PKR, 250 SMS for 800 PKR, 400 SMS for 1200 PKR, 1000 SMS for 2600 PKR, and 2000 SMS for 4800 PKR. Custom packages available on request."
                }
              },
              {
                "@type": "Question",
                "name": "What is the success rate of SMS Bomber?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SMS Bomber has a 100% success rate. We guarantee delivery of SMS messages with our proven and tested technology that works reliably across all platforms and operators."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use SMS Bomber for SMS pranks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SMS Bomber is perfect for harmless SMS pranks. With our unlimited SMS bomber capabilities and anonymous delivery, you can prank your friends securely."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a free SMS Bomber version available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SMS Bomber offers flexible and affordable pricing starting from just 350 PKR for 100 SMS. We also provide custom packages for larger bulk SMS requirements."
                }
              }
            ]
          })
        }}
      />
    </Layout>
  );
}
