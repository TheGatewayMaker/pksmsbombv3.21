import Layout from "@/components/Layout";
import OperatorsSlider from "@/components/OperatorsSlider";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-100 leading-tight">
              Pakistan's First
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                SMS Spammer Tool
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-semibold mx-auto lg:mx-0">
              Automated SMS Bomber made specially to prank your friends. Send
              unlimited SMS messages with our secure, anonymous, and easy-to-use
              tool. No technical knowledge required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
              <a
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Download Now
              </a>
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

          {/* Pumpkin Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F21782784306240369f0bf06000b72d16%2Ff4f348fae6094dc0834e5d8836b622a0?format=webp&width=800"
                alt="SMS Bomber Pumpkin"
                className="relative w-full h-auto drop-shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:-rotate-3 cursor-pointer filter drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(249, 115, 22, 0.3))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operators Slider Section */}
      <section className="py-16 overflow-hidden border-b border-orange-500/20">
        <OperatorsSlider />
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-transparent via-slate-800/40 to-slate-900/60 backdrop-blur-xl border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-slate-100 mb-20">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 lg:p-10 border border-orange-500/20 hover:border-orange-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">⚡</div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                  Windows Compatible
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  Automated SMS Bomber works for both Windows 10 & 11 with minimal
                  internet required. Fast, reliable, and optimized for
                  performance.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 lg:p-10 border border-orange-500/20 hover:border-orange-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">📱</div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                  All Operators Supported
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  Our SMS Spammer Tool supports all major operators: JAZZ, WARID,
                  UFONE & ZONG. Works with any carrier in Pakistan.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 lg:p-10 border border-orange-500/20 hover:border-orange-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">🔒</div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-4">
                  Completely Anonymous
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  Our tool is entirely anonymous, keeping your IP hidden using
                  auto TOR & proxies to bypass limitations. Your privacy is
                  guaranteed.
                </p>
              </div>
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
                <th className="px-6 lg:px-8 py-6 text-left font-black text-slate-100 text-sm lg:text-lg">
                  SMS Package
                </th>
                <th className="px-6 lg:px-8 py-6 text-center font-black text-slate-100 text-sm lg:text-lg">
                  Price (PKR)
                </th>
                <th className="px-6 lg:px-8 py-6 text-center font-black text-slate-100 text-sm lg:text-lg">
                  Per SMS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-500/20">
              <tr className="hover:bg-orange-500/15 transition-all duration-300 group cursor-pointer">
                <td className="px-6 lg:px-8 py-5 font-bold text-slate-200 text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  100 SMS
                </td>
                <td className="px-6 lg:px-8 py-5 text-center font-black text-orange-400 text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  350 PKR
                </td>
                <td className="px-6 lg:px-8 py-5 text-center text-slate-300 text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  3.5 PKR
                </td>
              </tr>
              <tr className="bg-orange-500/8 hover:bg-orange-500/20 transition-all duration-300 group cursor-pointer">
                <td className="px-6 lg:px-8 py-5 font-bold text-slate-200 text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  250 SMS
                </td>
                <td className="px-6 lg:px-8 py-5 text-center font-black text-orange-400 text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  800 PKR
                </td>
                <td className="px-6 lg:px-8 py-5 text-center text-slate-300 text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  3.2 PKR
                </td>
              </tr>
              <tr className="hover:bg-orange-500/15 transition-all duration-300 group cursor-pointer">
                <td className="px-6 lg:px-8 py-5 font-bold text-slate-200 text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  400 SMS
                </td>
                <td className="px-6 lg:px-8 py-5 text-center font-black text-orange-400 text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  1,200 PKR
                </td>
                <td className="px-6 lg:px-8 py-5 text-center text-slate-300 text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  3.0 PKR
                </td>
              </tr>
              <tr className="bg-orange-500/8 hover:bg-orange-500/20 transition-all duration-300 group cursor-pointer">
                <td className="px-6 lg:px-8 py-5 font-bold text-slate-200 text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  1,000 SMS
                </td>
                <td className="px-6 lg:px-8 py-5 text-center font-black text-orange-400 text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  2,600 PKR
                </td>
                <td className="px-6 lg:px-8 py-5 text-center text-slate-300 text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
                  2.6 PKR
                </td>
              </tr>
              <tr className="hover:bg-orange-500/15 transition-all duration-300 group cursor-pointer">
                <td className="px-6 lg:px-8 py-5 font-bold text-slate-200 text-sm lg:text-base group-hover:text-slate-100 transition-colors">
                  2,000 SMS
                </td>
                <td className="px-6 lg:px-8 py-5 text-center font-black text-orange-400 text-lg lg:text-2xl group-hover:text-orange-300 transition-colors">
                  4,800 PKR
                </td>
                <td className="px-6 lg:px-8 py-5 text-center text-slate-300 text-sm lg:text-base font-semibold group-hover:text-slate-200 transition-colors">
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
            className="inline-flex items-center justify-center px-8 lg:px-12 py-4 lg:py-5 bg-white text-orange-600 font-black text-sm lg:text-lg rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 whitespace-nowrap"
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
