import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Calendar, ClipboardCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Maintenance = () => {
  const heroImage = "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero/hero-maintenance.jpg";
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    { icon: Wrench, title: 'Regular Maintenance', description: 'Scheduled inspections and preventive maintenance to keep the property in prime condition.' },
    { icon: Calendar, title: 'Flexible Scheduling', description: 'Customized maintenance plans to suit property needs and tenant schedules.' },
    { icon: ClipboardCheck, title: 'Detailed Reporting', description: 'Comprehensive reports on all maintenance work and property conditions.' },
    { icon: Sparkles, title: 'Deep Cleaning', description: 'Professional cleaning services to maintain property appeal and hygiene.' }
  ];

  const beforeAfter = [
      { before: "https://images.unsplash.com/photo-1582586588244-64ad8f007cd7", after: "https://images.unsplash.com/photo-1582586588244-64ad8f007cd7" },
      { before: "https://images.unsplash.com/photo-1688319693520-254f534e0386", after: "https://images.unsplash.com/photo-1691054095499-0b117fac9290" }
  ];

  return (
    <>
      <Helmet>
        <title>Property Maintenance Services | Dewata Home Living</title>
        <meta name="description" content="Protect your asset value with regular property maintenance services by DHL's professional team in Bali." />
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
            Property Maintenance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          >
            Protect your asset's value with regular property maintenance services by our professional team.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[var(--dark-black)] text-white">
        <div className="container-custom">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:max-w-lg mx-auto mb-12 h-auto bg-transparent border-b border-[#CBAF7A]/20 p-0 rounded-none">
                    <TabsTrigger value="services" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Our Services</TabsTrigger>
                    <TabsTrigger value="before-after" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Before & After</TabsTrigger>
                </TabsList>

                <TabsContent value="services" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Professional Maintenance Services</h2>
                        <p className="text-xl text-white/80 font-body leading-relaxed">
                            Your property is a valuable investment. Our team provides comprehensive services to ensure it remains in prime condition.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                        {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-[var(--emerald-green)] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <service.icon className="w-8 h-8 text-[var(--dewata-gold)]" />
                            </div>
                            <h3 className="text-2xl font-playfair-display mb-3 text-white">{service.title}</h3>
                            <p className="text-white/70 font-body leading-relaxed">{service.description}</p>
                        </motion.div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="before-after" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Before & After</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
                            See the transformation our maintenance services bring to properties.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
                        {beforeAfter.map((item, index) => (
                           <motion.div 
                             key={index}
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.3 }}
                             transition={{ duration: 0.6, delay: index * 0.2 }}
                             className="grid grid-cols-2 gap-4"
                           >
                                <div className="space-y-2">
                                    <span className="px-3 py-1 bg-[var(--dewata-gold)] text-black text-xs rounded-full font-medium inline-block">Before</span>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img className="w-full h-full object-cover" alt="Property before maintenance" src={item.before} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                     <span className="px-3 py-1 bg-[var(--emerald-green)] text-white text-xs rounded-full font-medium inline-block">After</span>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img className="w-full h-full object-cover" alt="Property after maintenance" src={item.after} />
                                    </div>
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
              Keep your property in perfect condition
            </h2>
            <Button asChild variant="secondary" className="border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111] rounded-2xl px-8 py-3 text-lg">
                <Link to="/contact">Request Maintenance</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Maintenance;