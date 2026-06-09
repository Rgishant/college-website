import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/departments', label: 'Departments' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg">Kakasaheb Chavan College</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering students with quality education and building futures since 1999.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Contact Info</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Talmavale, Near Jalgaon, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@kakasahebchavan.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Follow Us</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © 2026 Kakasaheb Chavan College. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-90">
            <Link to="/privacy" className="hover:opacity-100 hover:underline transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:opacity-100 hover:underline transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
