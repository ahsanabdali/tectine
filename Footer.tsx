import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { footerLinks, companyInfo } from '@/lib/constants';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle the newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
    alert('Thanks for subscribing! We will send you the latest updates.');
  };
  
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/">
              <a className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-white font-extrabold text-xl">TECTINE</span>
              </a>
            </Link>
            
            <p className="text-white/80 mb-6">
              {companyInfo.description} Our innovative solutions empower businesses to leverage AI for growth, efficiency, and competitive advantage.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-white/80">{companyInfo.address}</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-white/80 hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-4">
              Get the latest news, insights, and updates on AI technology straight to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="rounded-l-none" variant="default">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-white/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href={companyInfo.socialMedia.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href={companyInfo.socialMedia.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href={companyInfo.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href={companyInfo.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legalLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <a className="text-white/70 text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}