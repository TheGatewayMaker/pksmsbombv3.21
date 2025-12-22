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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4 leading-tight">
            License Pricing
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Choose the license duration that works best for you. All licenses include 
            full access to all features and priority support.
          </p>
        </div>

        {/* License Table */}
        <div className="overflow-x-auto rounded-xl border border-red-200/30 dark:border-red-900/30 mb-16">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-red-600/10 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/20 border-b border-red-200/30 dark:border-red-900/30">
                <th className="px-6 py-4 text-left font-bold text-foreground">Duration</th>
                <th className="px-6 py-4 text-center font-bold text-foreground">Price</th>
                <th className="px-6 py-4 text-center font-bold text-foreground">Daily Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-200/20 dark:divide-red-900/20">
              <tr className="hover:bg-white/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">License Key of 1 Week</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">1,399 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">~200 PKR/day</td>
              </tr>
              <tr className="bg-red-50/50 dark:bg-red-950/20 hover:bg-red-100/50 dark:hover:bg-red-900/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">License Key of 2 Weeks</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">2,599 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">~186 PKR/day</td>
              </tr>
              <tr className="hover:bg-white/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">License Key of 1 Month</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">4,799 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">~160 PKR/day</td>
              </tr>
              <tr className="bg-gradient-to-r from-red-100/50 to-orange-100/50 dark:from-red-950/40 dark:to-orange-950/40 hover:from-red-100 hover:to-orange-100 dark:hover:from-red-950/60 dark:hover:to-orange-950/60 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                  License Key of 3 Months
                  <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    BEST VALUE
                  </span>
                </td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">11,999 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">~133 PKR/day</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Features Included */}
        <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            What's Included in Every License?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {licenseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 dark:from-red-900 dark:via-orange-900 dark:to-red-900 rounded-xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your License?
          </h2>
          
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us on WhatsApp to purchase your license key. We'll activate it 
            for you immediately after payment confirmation.
          </p>
          
          <a 
            href="https://wa.me/message/XMTA7ADWNLB2D1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:shadow-xl transition-all"
          >
            Get Your License Key
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t border-red-200/30 dark:border-red-900/30">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-red-200/20 dark:border-red-900/20">
              <h3 className="font-bold text-foreground mb-2">
                When does my license expire?
              </h3>
              <p className="text-muted-foreground">
                Your license will expire exactly on the date specified in your purchase confirmation. 
                You can renew anytime before or after expiration.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-red-200/20 dark:border-red-900/20">
              <h3 className="font-bold text-foreground mb-2">
                Can I upgrade my license?
              </h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade to a longer license period anytime. Contact us on WhatsApp 
                for upgrade details and pricing.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-red-200/20 dark:border-red-900/20">
              <h3 className="font-bold text-foreground mb-2">
                Is there a refund policy?
              </h3>
              <p className="text-muted-foreground">
                All sales are final. Please ensure your system meets the requirements before 
                purchasing. Contact support if you have any issues.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-red-200/20 dark:border-red-900/20">
              <h3 className="font-bold text-foreground mb-2">
                How do I activate my license?
              </h3>
              <p className="text-muted-foreground">
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
