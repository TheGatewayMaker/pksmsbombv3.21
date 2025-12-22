import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border-t border-red-200/20 dark:border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">SMS Bomber</h3>
            <p className="text-sm text-muted-foreground">
              Pakistan's first automated SMS spammer tool. Prank your friends safely and securely.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/download" className="text-muted-foreground hover:text-primary transition-colors">Download</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/license" className="text-muted-foreground hover:text-primary transition-colors">License</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/message/XMTA7ADWNLB2D1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-200/20 dark:border-red-900/20 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} SMS Bomber. All rights reserved. | For educational and entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
