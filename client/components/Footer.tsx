import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-2xl bg-gradient-to-t from-slate-900/95 to-slate-900/80 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-black text-orange-400 mb-4">
              SMS Bomber
            </h3>
            <p className="text-base text-slate-300 leading-relaxed font-medium">
              Pakistan's first automated SMS spammer tool. Prank your friends
              safely and securely.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/license"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-6">Support</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://wa.me/message/XMTA7ADWNLB2D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-6">Legal</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-orange-400 transition-colors font-semibold"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-8">
          <p className="text-center text-base text-slate-400 font-medium">
            &copy; {currentYear} SMS Bomber. All rights reserved. | For
            educational and entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
