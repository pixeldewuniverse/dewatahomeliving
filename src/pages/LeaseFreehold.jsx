import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, FileCheck, TrendingUp, Shield, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LeaseFreehold = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('all');
  const heroImage = "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero/hero-land.jpg";

  const services = [
    { icon: MapPin, title: 'Location Scouting', description: 'We identify strategic locations with high rental demand and growth potential.' },
    { icon: FileCheck, title: 'Legal Verification', description: 'Complete document review and legal compliance checks for secure transactions.' },
    { icon: TrendingUp, title: 'Investment Analysis', description: 'Detailed ROI projections and market analysis for informed decisions.' },
    { icon: Shield, title: 'Secure Transactions', description: 'Safe and transparent land acquisition process with full legal support.' }
  ];

  const listings = [
    {"type":"Leasehold","title":"Canggu Strategic Location","area":"5 are","price":"IDR 800M","img":"https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/no image.svg", "map_link": "#"},
    {"type":"Freehold","title":"Sanur Beachside","area":"8 are","price":"IDR 1.2B","img":"https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/no image.svg", "map_link": "#"},
    {"type":"Leasehold","title":"Ubud Rice Field View","area":"12 are","price":"IDR 600M","img":"https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/no image.svg", "map_link": "#"}
  ];

  const filteredListings = activeFilter === 'all' 
    ? listings 
    : listings.filter(l => l.type.toLowerCase() === activeFilter);
  
  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 This feature Under Maintenance"
    });
  };

  return (
    <>
      <Helmet>
        <title>Lease & Freehold Land | Dewata Home Living</title>
        <meta name="description" content="Find and verify the right land for your investment in Bali. Leasehold or freehold options with complete documentation and nearby facilities." />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--emerald-green)] via-[#004930] to-[var(--dark-black)]"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-70"
          style={{backgroundImage: `url('${heroImage}')`}}
        ></div>
        <div className="absolute inset-0 bg-black/45 md:bg-black/50"></div>
        
        <div className="relative z-10 container-custom max-w-3xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 leading-tight text-[var(--dewata-gold)] font-playfair-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
          >
            Lease & Freehold
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          >
            Find and verify the right land for your investment—complete with documentation and nearby facilities.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[var(--dark-black)] text-white">
        <div className="container-custom">
          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:max-w-lg mx-auto mb-12 h-auto bg-transparent border-b border-[#CBAF7A]/20 p-0 rounded-none">
              <TabsTrigger value="listings" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Available Properties</TabsTrigger>
              <TabsTrigger value="services" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Our Services</TabsTrigger>
            </TabsList>
            
             <TabsContent value="listings" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-4 text-[var(--dewata-gold)] font-playfair-display">Available Properties in Bali</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
                  Explore our selection of land and investment-ready projects in strategic Bali locations.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-body mt-8">
                  {['all', 'leasehold', 'freehold'].map(filter => (
                    <Button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      variant={activeFilter === filter ? 'default' : 'outline'}
                      className={`${activeFilter === filter ? 'bg-[var(--dewata-gold)] text-black' : 'border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-black'} rounded-2xl text-base px-6 py-2 transition-all`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
              /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {filteredListings.map((listing, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-2xl overflow-hidden card-shadow hover:bg-white/10 transition-all duration-300 flex flex-col"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={`Land in ${listing.title}`} src={listing.img} />
                       <span className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-medium ${listing.type === 'Leasehold' ? 'bg-[var(--emerald-green)] text-white' : 'bg-[var(--dewata-gold)] text-black'}`}>{listing.type}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-playfair-display mb-2 text-white">{listing.title}</h3>
                      <p className="text-xl font-bold text-[var(--dewata-gold)] mb-4 font-playfair-display">{listing.price} <span className="text-sm font-body text-white/70">/are</span></p>
                      <div className="flex-grow"></div>
                      <Button onClick={handleFeatureNotImplemented} className="w-full bg-transparent border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-black rounded-xl">
                        <MapPin className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
               <div className="text-center mt-12">
                  <Button onClick={handleFeatureNotImplemented} variant="secondary" className="bg-transparent border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111] rounded-2xl px-8 py-3 text-lg">
                      View All Listings
                  </Button>
              </div> 
            </TabsContent>

            <TabsContent value="services" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
              <div className="max-w-4xl mx-auto mb-12 text-center">
                <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Land Acquisition Services</h2>
                <p className="text-xl text-white/80 font-body leading-relaxed">
                  Securing land is the foundation of a successful investment. Our team helps you navigate the Balinese property market, whether for leasehold or freehold.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[var(--emerald-green)] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <service.icon className="w-6 h-6 text-[var(--dewata-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair-display mb-2 text-white">{service.title}</h3>
                      <p className="text-white/70 font-body leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-[var(--emerald-green)] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-playfair-display">
              Ready to secure your investment land?
            </h2>
             <Button asChild variant="secondary" className="border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111] rounded-2xl px-8 py-3 text-lg">
                <Link to="/contact">Contact Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LeaseFreehold;
