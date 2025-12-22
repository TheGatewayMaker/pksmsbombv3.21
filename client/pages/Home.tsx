import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
            Pakistan's First
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              SMS Spammer Tool
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Automated SMS Bomber made specially to prank your friends. Send unlimited SMS messages 
            with our secure, anonymous, and easy-to-use tool. No technical knowledge required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="/download"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Download Now
            </a>
            <a 
              href="https://wa.me/message/XMTA7ADWNLB2D1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600/10 transition-all"
            >
              Contact via WhatsApp
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-y border-red-200/20 dark:border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-16">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30 hover:border-red-400/50 dark:hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Windows Compatible
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Automated SMS Bomber works for both Windows 10 & 11 with minimal internet required. 
                Fast, reliable, and optimized for performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30 hover:border-red-400/50 dark:hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                All Operators Supported
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our SMS Spammer Tool supports all major operators: JAZZ, WARID, UFONE & ZONG. 
                Works with any carrier in Pakistan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30 hover:border-red-400/50 dark:hover:border-red-700/50 transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Completely Anonymous
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our tool is entirely anonymous, keeping your IP hidden using auto TOR & proxies 
                to bypass limitations. Your privacy is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center text-foreground mb-4">
          Simple & Transparent Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Choose the SMS package that fits your needs. All packages include anonymous delivery.
        </p>
        
        <div className="overflow-x-auto rounded-xl border border-red-200/30 dark:border-red-900/30">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-red-600/10 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/20 border-b border-red-200/30 dark:border-red-900/30">
                <th className="px-6 py-4 text-left font-bold text-foreground">SMS Count</th>
                <th className="px-6 py-4 text-center font-bold text-foreground">Price</th>
                <th className="px-6 py-4 text-center font-bold text-foreground">Cost per SMS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-200/20 dark:divide-red-900/20">
              <tr className="hover:bg-white/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">100 SMS to Any Number</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">350 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">3.5 PKR</td>
              </tr>
              <tr className="bg-red-50/50 dark:bg-red-950/20 hover:bg-red-100/50 dark:hover:bg-red-900/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">250 SMS to Any Number</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">800 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">3.2 PKR</td>
              </tr>
              <tr className="hover:bg-white/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">400 SMS to Any Number</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">1,200 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">3.0 PKR</td>
              </tr>
              <tr className="bg-red-50/50 dark:bg-red-950/20 hover:bg-red-100/50 dark:hover:bg-red-900/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">1,000 SMS to Any Number</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">2,600 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">2.6 PKR</td>
              </tr>
              <tr className="hover:bg-white/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground">2,000 SMS to Any Number</td>
                <td className="px-6 py-4 text-center font-bold text-primary text-lg">4,800 PKR</td>
                <td className="px-6 py-4 text-center text-muted-foreground">2.4 PKR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200/30 dark:border-blue-900/30 rounded-lg">
          <p className="text-center text-muted-foreground mb-4">
            Need a custom SMS count? We can help!
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/message/XMTA7ADWNLB2D1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Contact us on WhatsApp
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 dark:from-red-900 dark:via-orange-900 dark:to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Download our tool today and start pranking your friends with unlimited SMS messages.
            It's easy, secure, and completely anonymous.
          </p>
          <a 
            href="/download"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:shadow-xl transition-all"
          >
            Download Now
          </a>
        </div>
      </section>

      {/* SEO Meta Keywords Section */}
      <div className="hidden" data-seo="true">
        <p>SMS Bomber, SMS Spammer, Pakistan SMS Spammer, Pak SMS Spammer, Pak SMS Bomber, 
           PK SMS Bomber, Pak OTP Spammer, OTP Bomber, SMS Bomber Pakistan, SMS Bomber for Pakistan,
           Automated SMS Tool, Anonymous SMS Sender, Pakistani SMS Tool, SMS Pranks, 
           SMS Bulk Sender, Windows SMS Tool, Jazz Zong Ufone Warid</p>
      </div>
    </Layout>
  );
}
