import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/30 border-b border-orange-500/30">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-16 sm:h-20 flex items-center justify-between relative">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F21782784306240369f0bf06000b72d16%2F55759bbe1b394328a855e8d52c024695?format=webp&width=100"
            alt="SMS Bomber"
            className="h-10 sm:h-12 w-10 sm:w-12 drop-shadow-lg"
          />
          <div className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Pk Sms Bomb
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-base font-semibold">
          <li>
            <Link
              to="/"
              className="text-slate-200 hover:text-orange-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/download"
              className="text-slate-200 hover:text-orange-400 transition-colors duration-200"
            >
              Download
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-slate-200 hover:text-orange-400 transition-colors duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/license"
              className="text-slate-200 hover:text-orange-400 transition-colors duration-200"
            >
              License
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <MobileNav />
      </nav>
    </header>
  );
}
