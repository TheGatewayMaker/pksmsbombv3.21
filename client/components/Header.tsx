import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gradient-to-b from-slate-900/95 to-slate-900/80 border-b border-orange-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F21e53940686840dfab4f5a6e4a2a1205%2F0bf09163b43040bf9014564502559b38?format=webp&width=100"
            alt="SMS Bomber"
            className="h-12 w-12"
          />
          <div className="text-3xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
            SMS Bomber
          </div>
        </Link>

        <ul className="flex items-center gap-8 text-base font-semibold">
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
      </nav>
    </header>
  );
}
