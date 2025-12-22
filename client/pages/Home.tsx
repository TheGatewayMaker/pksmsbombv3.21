import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-black text-slate-100 leading-tight">
            Pakistan's First
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              SMS Spammer Tool
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-semibold">
            Automated SMS Bomber made specially to prank your friends. Send
            unlimited SMS messages with our secure, anonymous, and easy-to-use
            tool. No technical knowledge required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <a
              href="/download"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-lg rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Download Now
            </a>
            <a
              href="https://wa.me/message/XMTA7ADWNLB2D1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border-3 border-orange-500 text-orange-400 font-black text-lg rounded-xl hover:bg-orange-500/10 transition-all duration-300"
            >
              Contact via WhatsApp
              <ExternalLink className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-transparent via-slate-800/40 to-slate-900/60 backdrop-blur-xl border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <h2 className="text-6xl md:text-7xl font-black text-center text-slate-100 mb-20">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-10 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-3xl font-black text-slate-100 mb-5">
                Windows Compatible
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed font-semibold">
                Automated SMS Bomber works for both Windows 10 & 11 with minimal
                internet required. Fast, reliable, and optimized for
                performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-10 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-3xl font-black text-slate-100 mb-5">
                All Operators Supported
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed font-semibold">
                Our SMS Spammer Tool supports all major operators: JAZZ, WARID,
                UFONE & ZONG. Works with any carrier in Pakistan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-10 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-3xl font-black text-slate-100 mb-5">
                Completely Anonymous
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed font-semibold">
                Our tool is entirely anonymous, keeping your IP hidden using
                auto TOR & proxies to bypass limitations. Your privacy is
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h2 className="text-6xl md:text-7xl font-black text-center text-slate-100 mb-6">
          Simple & Transparent Pricing
        </h2>
        <p className="text-center text-slate-300 mb-20 text-2xl max-w-3xl mx-auto font-semibold leading-relaxed">
          Choose the SMS package that fits your needs. All packages include
          anonymous delivery.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-orange-500/30">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-b border-orange-500/30">
                <th className="px-8 py-6 text-left font-black text-slate-100 text-xl">
                  SMS Count
                </th>
                <th className="px-8 py-6 text-center font-black text-slate-100 text-xl">
                  Price
                </th>
                <th className="px-8 py-6 text-center font-black text-slate-100 text-xl">
                  Cost per SMS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-500/20">
              <tr className="hover:bg-orange-500/5 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">
                  100 SMS to Any Number
                </td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">
                  350 PKR
                </td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">
                  3.5 PKR
                </td>
              </tr>
              <tr className="bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">
                  250 SMS to Any Number
                </td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">
                  800 PKR
                </td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">
                  3.2 PKR
                </td>
              </tr>
              <tr className="hover:bg-orange-500/5 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">
                  400 SMS to Any Number
                </td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">
                  1,200 PKR
                </td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">
                  3.0 PKR
                </td>
              </tr>
              <tr className="bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">
                  1,000 SMS to Any Number
                </td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">
                  2,600 PKR
                </td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">
                  2.6 PKR
                </td>
              </tr>
              <tr className="hover:bg-orange-500/5 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">
                  2,000 SMS to Any Number
                </td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">
                  4,800 PKR
                </td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">
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
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-lg rounded-xl hover:shadow-xl hover:shadow-orange-500/50 transition-all"
            >
              Contact us on WhatsApp
              <ExternalLink className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 my-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
            Download our tool today and start pranking your friends with
            unlimited SMS messages. It's easy, secure, and completely anonymous.
          </p>
          <a
            href="/download"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-orange-600 font-black text-xl rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Download Now
          </a>
        </div>
      </section>

      {/* SEO Meta Keywords Section */}
      <div className="hidden" data-seo="true">
        <p>
          SMS Bomber, SMS Spammer, Pakistan SMS Spammer, Pak SMS Spammer, Pak
          SMS Bomber, PK SMS Bomber, Pak OTP Spammer, OTP Bomber, SMS Bomber
          Pakistan, SMS Bomber for Pakistan, Automated SMS Tool, Anonymous SMS
          Sender, Pakistani SMS Tool, SMS Pranks, SMS Bulk Sender, Windows SMS
          Tool, Jazz Zong Ufone Warid
        </p>
      </div>
    </Layout>
  );
}
