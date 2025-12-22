import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-2xl bg-gradient-to-t from-slate-900/95 to-slate-900/80 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-orange-400 mb-4">
              PK SMS Bomber
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Pakistan's first automated SMS spammer and SMS bomber tool. Send
              unlimited anonymous SMS pranks safely and securely with full
              operator support.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="SMS Bomber Home"
                >
                  Home - SMS Bomber
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="Download SMS Bomber Tool"
                >
                  Download SMS Bomber
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="SMS Bomber Pricing"
                >
                  SMS Bomber Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/license"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="SMS Bomber License"
                >
                  License Plans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-4 sm:mb-6">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="https://wa.me/message/XMTA7ADWNLB2D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="Contact SMS Bomber via WhatsApp"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="Contact SMS Bomber Team"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="SMS Bomber FAQ"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-4 sm:mb-6">
              Information
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#privacy"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="Terms of Service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                  title="Disclaimer"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-6 sm:pt-8">
          <div className="hidden" data-seo="true" role="doc-note">
            <p>
              SMS Bomber Pakistan - SMS Spammer Tool for all Pakistani
              operators. SMS API Pakistan, Cheap SMS API, Bulk SMS API. SMS
              Bomber APK, SMS Spammer APK Mod, Android SMS Spammer, iOS SMS
              Spammer. SMS Bomber free download, SMS Bomber online. SMS Bomber
              2024, SMS Bomber 2025, SMS Bomber 2026 versions. SMS Bombing
              service with 100% success rate.
            </p>
            <p>
              Pakistan SMS Service provider offering SMS Package, SMS Charges,
              SMS Code, SMS Alert, SMS Bill management. Hamariweb SMS, SMS 2PK,
              Web 2 SMS, SMS Caster, SMS Punch alternatives. Free SMS send
              service. SMS Unsubscribe and SMS Advance Subscribe. SMS Service
              Pakistan with JAZZ, ZONG, UFONE, WARID, TELENOR operator support.
              Bulk SMS Spammer with cheap API pricing.
            </p>
          </div>
          <p className="text-center text-xs sm:text-base text-slate-400 font-medium">
            &copy; {currentYear} PK SMS Bomber - Pakistan&apos;s #1 SMS Spammer
            Tool | Free SMS Bomber APK | Cheap SMS API Pakistan | SMS Bombing
            Service | All rights reserved. | For educational and entertainment
            purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
