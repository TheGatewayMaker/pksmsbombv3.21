import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Download", href: "/download" },
    { label: "Pricing", href: "/pricing" },
    { label: "License", href: "/license" },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden relative z-50 inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-orange-400 focus:outline-none transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      <nav
        className={`absolute top-full left-0 right-0 lg:hidden z-40 bg-slate-900/95 backdrop-blur-lg border-b border-orange-500/30 transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 visible scale-y-100"
            : "opacity-0 invisible scale-y-95"
        }`}
      >
        <ul className="flex flex-col py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="block px-4 py-3 rounded-lg text-slate-200 hover:text-orange-400 hover:bg-orange-500/10 transition-colors duration-200 font-semibold"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
