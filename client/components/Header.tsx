import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 dark:bg-black/30 border-b border-red-200/20 dark:border-red-900/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
            🎃 SMS Bomber
          </div>
        </Link>
        
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/download" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Download
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              to="/license" 
              className="text-foreground hover:text-primary transition-colors"
            >
              License
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
