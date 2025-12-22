import Layout from "@/components/Layout";
import { Check, ExternalLink } from "lucide-react";

export default function LicensePage() {
  const licenseFeatures = [
    "Full SMS Bombing capabilities",
    "All operator support (JAZZ, WARID, UFONE, ZONG)",
    "Unlimited daily usage",
    "Anonymous delivery with TOR/Proxies",
    "Auto-update feature",
    "Priority customer support",
  ];

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-7xl md:text-8xl font-black text-slate-100 mb-6 leading-tight">
            License Pricing
          </h1>
          
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto mt-8 font-semibold leading-relaxed">
            Choose the license duration that works best for you. All licenses include 
            full access to all features and priority support.
          </p>
        </div>

        {/* License Table */}
        <div className="overflow-x-auto rounded-2xl border border-orange-500/30 mb-20">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-b border-orange-500/30">
                <th className="px-8 py-6 text-left font-black text-slate-100 text-xl">Duration</th>
                <th className="px-8 py-6 text-center font-black text-slate-100 text-xl">Price</th>
                <th className="px-8 py-6 text-center font-black text-slate-100 text-xl">Daily Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-500/20">
              <tr className="hover:bg-orange-500/5 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">License Key of 1 Week</td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">1,399 PKR</td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">~200 PKR/day</td>
              </tr>
              <tr className="bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">License Key of 2 Weeks</td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">2,599 PKR</td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">~186 PKR/day</td>
              </tr>
              <tr className="hover:bg-orange-500/5 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg">License Key of 1 Month</td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">4,799 PKR</td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">~160 PKR/day</td>
              </tr>
              <tr className="bg-gradient-to-r from-orange-500/30 to-red-500/30 hover:from-orange-500/40 hover:to-red-500/40 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-200 text-lg flex items-center gap-3">
                  License Key of 3 Months
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-black rounded">
                    BEST VALUE
                  </span>
                </td>
                <td className="px-8 py-6 text-center font-black text-orange-400 text-2xl">11,999 PKR</td>
                <td className="px-8 py-6 text-center text-slate-300 text-lg font-semibold">~133 PKR/day</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Features Included */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-12 border border-orange-500/30 mb-20">
          <h2 className="text-4xl font-black text-slate-100 mb-12">
            What's Included in Every License?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {licenseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-7 h-7 text-orange-400 flex-shrink-0 mt-1 font-black" />
                <span className="text-slate-300 font-bold text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Get Your License?
          </h2>
          
          <p className="text-white/95 mb-10 max-w-3xl mx-auto text-xl font-semibold leading-relaxed">
            Contact us on WhatsApp to purchase your license key. We'll activate it 
            for you immediately after payment confirmation.
          </p>
          
          <a 
            href="https://wa.me/message/XMTA7ADWNLB2D1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-orange-600 font-black text-xl rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
          >
            Get Your License Key
            <ExternalLink className="ml-3 w-6 h-6" />
          </a>
        </div>

        {/* FAQ Section */}
        <div className="pt-12 border-t border-orange-500/20">
          <h2 className="text-5xl font-black text-slate-100 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-8 border border-orange-500/20">
              <h3 className="font-black text-slate-100 mb-3 text-2xl">
                When does my license expire?
              </h3>
              <p className="text-slate-300 text-lg font-semibold">
                Your license will expire exactly on the date specified in your purchase confirmation. 
                You can renew anytime before or after expiration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-8 border border-orange-500/20">
              <h3 className="font-black text-slate-100 mb-3 text-2xl">
                Can I upgrade my license?
              </h3>
              <p className="text-slate-300 text-lg font-semibold">
                Yes! You can upgrade to a longer license period anytime. Contact us on WhatsApp 
                for upgrade details and pricing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-8 border border-orange-500/20">
              <h3 className="font-black text-slate-100 mb-3 text-2xl">
                Is there a refund policy?
              </h3>
              <p className="text-slate-300 text-lg font-semibold">
                All sales are final. Please ensure your system meets the requirements before 
                purchasing. Contact support if you have any issues.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-8 border border-orange-500/20">
              <h3 className="font-black text-slate-100 mb-3 text-2xl">
                How do I activate my license?
              </h3>
              <p className="text-slate-300 text-lg font-semibold">
                After purchase, we'll send you a unique license key. Launch the SMS Bomber 
                application and enter the key in the license activation section.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
