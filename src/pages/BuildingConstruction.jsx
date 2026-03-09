import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hammer, Clock, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BuildingConstruction = () => {
  const heroImage = "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero/hero-construction.jpg";
  const [activeTab, setActiveTab] = useState('process');

  const features = [
    {
      icon: Hammer,
      title: 'Quality Workmanship',
      description: 'Experienced builders using premium materials and proven construction methods.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Strict project schedules with regular progress updates and milestone tracking.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Multiple inspection points and quality checks throughout the construction process.'
    },
    {
      icon: Users,
      title: 'Transparent Communication',
      description: 'Regular updates, site visits, and open communication channels with our team.'
    }
  ];

  const timelineSteps = [
    { title: 'Consultation & Design', description: 'Initial discussion, requirement setting, and architectural design development.' },
    { title: 'Estimation & Contract', description: 'Transparent cost planning (RAB) and contract signing.' },
    { title: 'Construction & Supervision', description: 'Building process with strict project management and supervision.' },
    { title: 'Handover', description: 'Project completion, final inspection, and key handover to the client.' },
  ];
  
  const galleryImages = [
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/construction/4.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/construction/5.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/construction/6.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/construction/7.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/construction/9.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/construction/13.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>Building Construction | Dewata Home Living</title>
        <meta name="description" content="Professional building and construction services in Bali. From renovation to full projects, DHL ensures quality and timely delivery." />
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
            Building & Construction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          >
            From renovations to full-scale projects, DHL ensures every build meets the highest standards of quality and time.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[var(--dark-black)] text-white">
        <div className="container-custom">
           <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:max-w-2xl mx-auto mb-12 h-auto bg-transparent border-b border-[#CBAF7A]/20 p-0 rounded-none">
              <TabsTrigger value="services" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Our Services</TabsTrigger>
              <TabsTrigger value="process" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Our Process</TabsTrigger>
              <TabsTrigger value="gallery" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
               <div className="max-w-4xl mx-auto mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Our Construction Services</h2>
                  <p className="text-xl text-white/80 font-body leading-relaxed">
                    Whether you're building a new co-living property or renovating an existing space, our team delivers exceptional results.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-[var(--emerald-green)] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <feature.icon className="w-8 h-8 text-[var(--dewata-gold)]" />
                      </div>
                      <h3 className="text-2xl font-playfair-display mb-3 text-white">{feature.title}</h3>
                      <p className="text-white/70 font-body leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
            </TabsContent>
            
            <TabsContent value="process" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Our Construction Process</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto font-body leading-relaxed">
                  From concept to completion—quality, transparency, and timely delivery.
                </p>
              </div>
              <div className="relative max-w-5xl mx-auto pt-8 px-6">
                <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--dewata-gold)]/20"></div>
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-center mb-12 last:mb-0 md:odd:flex-row-reverse"
                  >
                    <div className="absolute left-10 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--emerald-green)] rounded-full flex items-center justify-center border-4 border-[var(--dark-black)] z-10">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="w-full ml-10 md:ml-0 md:w-[calc(50%-2rem)] md:px-8">
                       <div className="bg-white/5 p-6 rounded-2xl">
                          <h3 className="text-2xl font-playfair-display mb-2 text-white">{step.title}</h3>
                          <p className="text-white/70 text-base font-body">{step.description}</p>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12 md:py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Construction Gallery</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
                  Progress and final results from our recent projects.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {galleryImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-[4/3] rounded-2xl overflow-hidden card-shadow border border-white/10"
                  >
                    <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={`Construction gallery ${index+1}`} src={src} />
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
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-playfair-display text-white">
              Ready to start your construction project?
            </h2>
            <Button asChild variant="secondary" className="border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111] rounded-2xl px-8 py-3 text-lg">
                <Link to="/contact">Request a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BuildingConstruction;