import Layout from "@/components/Layout";
import { ExternalLink, Check } from "lucide-react";

export default function PricingPage() {
  const pricingTiers = [
    {
      count: 100,
      price: 350,
      perSms: 3.5,
      features: [
        "100 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "24-hour validity"
      ]
    },
    {
      count: 250,
      price: 800,
      perSms: 3.2,
      features: [
        "250 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "24-hour validity"
      ]
    },
    {
      count: 400,
      price: 1200,
      perSms: 3.0,
      features: [
        "400 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "24-hour validity"
      ]
    },
    {
      count: 1000,
      price: 2600,
      perSms: 2.6,
      features: [
        "1,000 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "7-day validity"
      ]
    },
    {
      count: 2000,
      price: 4800,
      perSms: 2.4,
      features: [
        "2,000 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "7-day validity"
      ]
    }
  ];

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4 leading-tight">
            Transparent Pricing
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            No hidden fees. No surprises. Just simple, honest pricing for our SMS bombing service.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`rounded-xl border transition-all ${
                tier.count === 1000 
                  ? "border-red-500 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 ring-2 ring-red-500/50 relative" 
                  : "border-red-200/30 dark:border-red-900/30 bg-white dark:bg-slate-800/50 hover:border-red-400/50 dark:hover:border-red-700/50"
              }`}
            >
              {tier.count === 1000 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.count.toLocaleString()} SMS
                </h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-black text-primary">
                    {tier.price.toLocaleString()} PKR
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {tier.perSms} PKR per SMS
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/message/XMTA7ADWNLB2D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 py-2 font-bold rounded-lg transition-all ${
                    tier.count === 1000
                      ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/50"
                      : "border-2 border-red-600 text-red-600 hover:bg-red-600/10"
                  }`}
                >
                  Get {tier.count} SMS
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pricing Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border border-blue-200/30 dark:border-blue-900/30 text-center mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Looking for a specific number of SMS that's not listed above? We can create a custom 
            package tailored to your needs. Contact us on WhatsApp for custom pricing.
          </p>
          <a 
            href="https://wa.me/message/XMTA7ADWNLB2D1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
          >
            Contact for Custom Pricing
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Payment Information */}
        <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            How to Purchase
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-black text-primary mb-4">1</div>
              <h3 className="font-bold text-foreground mb-2">Choose Your Package</h3>
              <p className="text-muted-foreground text-sm">
                Select the SMS count that fits your needs. Can't find what you want? Contact us 
                for custom packages.
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-black text-primary mb-4">2</div>
              <h3 className="font-bold text-foreground mb-2">Contact & Pay</h3>
              <p className="text-muted-foreground text-sm">
                Reach out to us on WhatsApp and complete the payment. We accept multiple payment 
                methods for your convenience.
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-black text-primary mb-4">3</div>
              <h3 className="font-bold text-foreground mb-2">Get Activated</h3>
              <p className="text-muted-foreground text-sm">
                Your SMS package is activated immediately after payment confirmation. 
                Start using the tool right away!
              </p>
            </div>
          </div>
        </div>

        {/* Operators Info */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Supported Operators
          </h2>
          
          <p className="text-muted-foreground mb-8">
            All our SMS packages work with all major Pakistani mobile operators. 
            Your SMS will be delivered reliably to any carrier.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["JAZZ", "ZONG", "UFONE", "WARID"].map((operator) => (
              <div 
                key={operator}
                className="bg-white dark:bg-slate-800/50 rounded-lg p-4 text-center border border-red-200/20 dark:border-red-900/20"
              >
                <div className="font-bold text-foreground text-lg">
                  {operator}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Full Support
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
