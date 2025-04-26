
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blazze-darker py-16 border-t border-blazze-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blazze-primary to-blazze-secondary rounded-md"></div>
              <span className="text-2xl font-bold text-white">BLAZZE</span>
            </Link>
            <p className="text-blazze-text-muted">Your gateway to the decentralized future. Securely access Web3 and manage digital assets with our platform.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blazze-text-muted hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blazze-text-muted hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-blazze-text-muted hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blazze-text-muted hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/wallet" className="text-blazze-text-muted hover:text-white transition-colors">BLAZZE Wallet</Link></li>
              <li><Link to="/card" className="text-blazze-text-muted hover:text-white transition-colors">Debit Card</Link></li>
              <li><Link to="/exchange" className="text-blazze-text-muted hover:text-white transition-colors">Exchange</Link></li>
              <li><Link to="/dapps" className="text-blazze-text-muted hover:text-white transition-colors">dApps</Link></li>
              <li><Link to="/nft" className="text-blazze-text-muted hover:text-white transition-colors">NFT Marketplace</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-blazze-text-muted hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/whitepaper" className="text-blazze-text-muted hover:text-white transition-colors">Whitepaper</Link></li>
              <li><Link to="/roadmap" className="text-blazze-text-muted hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link to="/faq" className="text-blazze-text-muted hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/security" className="text-blazze-text-muted hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blazze-text-muted hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-blazze-text-muted hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-blazze-text-muted hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-blazze-text-muted hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/contact" className="text-blazze-text-muted hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blazze-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-blazze-text-muted text-sm">© {new Date().getFullYear()} BLAZZE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-blazze-text-muted hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-sm text-blazze-text-muted hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-sm text-blazze-text-muted hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
