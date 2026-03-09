import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:hello@dewatahomeliving.com?subject=Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInterested Service: ${formData.service}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will respond within 24 hours.",
      variant: "default"
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+628133800049?text=Hello%20DHL,%20I%20would%20like%20to%20consult%20about%20a%20property%20investment.', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact | Dewata Home Living</title>
        <meta name="description" content="Get in touch with Dewata Home Living. We're ready to help you start your rental property investment in Bali." />
      </Helmet>

      <section className="py-40 bg-gradient-to-br from-[var(--emerald-green)] to-[var(--bali-earth-brown)] pt-48">
        <div className="container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 font-playfair-display"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-body"
          >
            We are ready to help you start your rental property investment in Bali. Our team will respond within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[var(--sandstone-beige)] -mt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl mb-10 font-playfair-display text-[var(--bali-earth-brown)]">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 card-shadow border border-[var(--dewata-gold)]/20">
                    <MapPin className="w-7 h-7 text-[var(--emerald-green)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 font-playfair-display text-[var(--bali-earth-brown)]">Address</h3>
                    <p className="text-gray-700 text-lg font-body">Jalan Gunung Fujiyama II no.5, Bali, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 card-shadow border border-[var(--dewata-gold)]/20">
                    <Phone className="w-7 h-7 text-[var(--emerald-green)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 font-playfair-display text-[var(--bali-earth-brown)]">Phone / WhatsApp</h3>
                    <p className="text-gray-700 text-lg font-body">+628133800049</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 card-shadow border border-[var(--dewata-gold)]/20">
                    <Mail className="w-7 h-7 text-[var(--emerald-green)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 font-playfair-display text-[var(--bali-earth-brown)]">Email</h3>
                    <p className="text-gray-700 text-lg font-body">info@dewatahomeliving.com</p>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-xl text-lg font-medium hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </motion.button>

              <div className="mt-8 rounded-2xl overflow-hidden card-shadow border border-[var(--dewata-gold)]/20">
                <img className="w-full h-auto" alt="Map showing Bali, Indonesia" src="https://images.unsplash.com/photo-1597392264161-f37b120434f9" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 sm:p-12 card-shadow border border-[var(--dewata-gold)]/20 lg:col-span-3"
            >
              <h3 className="text-3xl font-playfair-display mb-8 text-[var(--bali-earth-brown)]">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-body">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-body">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-body">Phone / WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-base font-body">Interested Service *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investment">Investment Package</SelectItem>
                      <SelectItem value="construction">Building & Construction</SelectItem>
                      <SelectItem value="lease-freehold">Lease & Freehold</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-body">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 min-h-[140px]"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--emerald-green)] hover:bg-[#004a2e] text-white py-6 text-lg rounded-xl shadow-lg shadow-green-900/20"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;