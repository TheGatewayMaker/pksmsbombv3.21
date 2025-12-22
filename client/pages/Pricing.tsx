import Layout from "@/components/Layout";
import { ExternalLink, Check } from "lucide-react";

export default function PricingPage() {
  const pricingTiers = [
    {
      count: 100,
      price: 350,
      perSms: 3.5,
      time: "5-10 Minutes",
      features: [
        "100 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "Time Required: 5-10 Minutes",
      ],
    },
    {
      count: 250,
      price: 800,
      perSms: 3.2,
      time: "10-15 Minutes",
      features: [
        "250 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "Time Required: 10-15 Minutes",
      ],
      popular: true,
    },
    {
      count: 400,
      price: 1200,
      perSms: 3.0,
      time: "15-20 Minutes",
      features: [
        "400 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "Time Required: 15-20 Minutes",
      ],
    },
    {
      count: 1000,
      price: 2600,
      perSms: 2.6,
      time: "30-45 Minutes",
      features: [
        "1,000 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "Time Required: 30-45 Minutes",
      ],
    },
    {
      count: 2000,
      price: 4800,
      perSms: 2.4,
      time: "60-90 Minutes",
      features: [
        "2,000 SMS to any number",
        "All operators supported",
        "Anonymous delivery",
        "Time Required: 60-90 Minutes",
      ],
    },
  ];

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24 px-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-100 mb-6 leading-tight">
            Transparent Pricing
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mt-8 font-medium leading-relaxed">
            No hidden fees. No surprises. Just simple, honest pricing for our
            SMS bombing service.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl border transition-all duration-300 p-8 lg:p-10 ${
                tier.popular
                  ? "border-orange-500 bg-gradient-to-br from-orange-500/20 to-red-500/20 md:scale-105"
                  : "border-orange-500/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 hover:border-orange-500/70"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm lg:text-base font-black">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-3">
                  {tier.count.toLocaleString()} SMS
                </h3>

                <div className="mb-8">
                  <div className="text-4xl lg:text-5xl font-black text-orange-400">
                    {tier.price.toLocaleString()} PKR
                  </div>
                  <p className="text-slate-300 text-base lg:text-lg mt-3 font-semibold">
                    {tier.perSms} PKR per SMS
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 lg:w-6 h-5 lg:h-6 text-orange-400 flex-shrink-0 mt-1 font-black" />
                      <span className="text-slate-300 font-medium text-sm lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/message/XMTA7ADWNLB2D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 lg:px-8 py-4 font-black text-base lg:text-lg rounded-xl transition-all transform hover:scale-105 whitespace-nowrap ${
                    tier.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-500/50"
                      : "border-2 border-orange-500 text-orange-400 hover:bg-orange-500/15"
                  }`}
                >
                  Get {tier.count} SMS
                  <ExternalLink className="ml-2 lg:ml-3 w-4 lg:w-5 h-4 lg:h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pricing Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-12 border border-blue-500/30 text-center mb-20">
          <h2 className="text-4xl font-black text-slate-100 mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-slate-300 mb-8 max-w-3xl mx-auto text-xl font-semibold leading-relaxed">
            Looking for a specific number of SMS that's not listed above? We can
            create a custom package tailored to your needs. Contact us on
            WhatsApp for custom pricing.
          </p>
          <a
            href="https://wa.me/message/XMTA7ADWNLB2D1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-lg rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            Contact for Custom Pricing
            <ExternalLink className="ml-3 w-5 h-5" />
          </a>
        </div>

        {/* Payment Information */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-12 border border-orange-500/30 mb-20">
          <h2 className="text-4xl font-black text-slate-100 mb-12">
            How to Purchase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl font-black text-orange-400 mb-6">1</div>
              <h3 className="font-black text-slate-100 mb-4 text-2xl">
                Choose Your Package
              </h3>
              <p className="text-slate-300 text-lg font-semibold leading-relaxed">
                Select the SMS count that fits your needs. Can't find what you
                want? Contact us for custom packages.
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-orange-400 mb-6">2</div>
              <h3 className="font-black text-slate-100 mb-4 text-2xl">
                Contact & Pay
              </h3>
              <p className="text-slate-300 text-lg font-semibold leading-relaxed">
                Reach out to us on WhatsApp and complete the payment. We accept
                multiple payment methods for your convenience.
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-orange-400 mb-6">3</div>
              <h3 className="font-black text-slate-100 mb-4 text-2xl">
                Get Activated
              </h3>
              <p className="text-slate-300 text-lg font-semibold leading-relaxed">
                Your SMS package is activated immediately after payment
                confirmation. Start using the tool right away!
              </p>
            </div>
          </div>
        </div>

        {/* Operators Info */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-12 border border-orange-500/30">
          <h2 className="text-4xl font-black text-slate-100 mb-8">
            Supported Operators
          </h2>

          <p className="text-slate-300 mb-10 text-xl font-semibold leading-relaxed">
            All our SMS packages work with all major Pakistani mobile operators.
            Your SMS will be delivered reliably to any carrier.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {["JAZZ", "ZONG", "UFONE", "WARID", "TELENOR"].map((operator) => (
              <div
                key={operator}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 text-center border border-orange-500/20"
              >
                <div className="font-black text-slate-100 text-2xl">
                  {operator}
                </div>
                <p className="text-xs text-slate-300 mt-2 font-bold">
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
