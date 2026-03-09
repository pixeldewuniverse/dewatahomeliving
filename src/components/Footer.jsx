import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/logo-dhl.png";
  

  return (
    <footer className="bg-gradient-to-t from-[#111111] to-[#001c11] text-white/75">
      <div className="container-custom pt-16">
        
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left mb-12">
            <div>
                <span className="font-semibold mb-4 block text-[var(--dewata-gold)]">Company</span>
                <div className="space-y-2">
                    <Link to="/about" className="block text-base hover:text-[var(--dewata-gold)] hover:underline transition-colors">About Us</Link>
                    <Link to="/blog" className="block text-base hover:text-[var(--dewata-gold)] hover:underline transition-colors">Blog</Link>
                    <Link to="/contact" className="block text-base hover:text-[var(--dewata-gold)] hover:underline transition-colors">Contact</Link>
                </div>
            </div>
            <div>
                <span className="font-semibold mb-4 block text-[var(--dewata-gold)]">Services</span>
                <div className="space-y-2">
                    <Link to="/services/investment-package" className="block text-base hover:text-[var(--dewata-gold)] hover:underline transition-colors">Investment</Link>
                    <Link to="/services/building-construction" className="block text-base hover:text-[var(--dewata-gold)] hover:underline transition-colors">Construction</Link>
                    <Link to="/services/maintenance" className="block text-base hover:text-[var(--dewata-gold)] hover:underline transition-colors">Maintenance</Link>
                </div>
            </div>
            <div>
                <span className="font-semibold mb-4 block text-[var(--dewata-gold)]">Legal</span>
                <div className="space-y-2">
                    <p>PT. Dewata Karya Investama</p>
                    <p>Bali, Indonesia</p>
                </div>
            </div>
            <div>
                <span className="font-semibold mb-4 block text-[var(--dewata-gold)]">Follow Us</span>
                 <div className="flex justify-center md:justify-start space-x-5">
                    <a href="https://www.instagram.com/livinghomedewata?igsh=eWl6a3FsbWNrazJx" className="hover:text-[var(--dewata-gold)] transition-colors"><Instagram /></a>
                    <a href="info@dewatahomeliving.com" className="hover:text-[var(--dewata-gold)] transition-colors"><Mail /></a>
                    <a href="https://wa.me/+628133800049" className="hover:text-[var(--dewata-gold)] transition-colors"><Phone /></a>
                 </div>
            </div>
        </div>

       

        <div className="border-t border-[var(--dewata-gold)]/20 py-8 text-center">
          <p className="text-base text-white/50">
            © {currentYear} Dewata Home Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;