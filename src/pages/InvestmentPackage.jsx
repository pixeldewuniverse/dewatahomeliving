import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calculator, DollarSign, Percent, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InvestmentPackage = () => {
  const { toast } = useToast();
  const [monthlyRent, setMonthlyRent] = useState(10); // in million IDR
  const [occupancyRate, setOccupancyRate] = useState(80); // in percent
  const heroImage = "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero/hero-cost.jpg";

  const packages = [
    {
      name: 'Silver', rooms: 8, price: '1.6B',
      features: ['8 Rooms', '2 Floors', '± 160m² Area', 'Modern Design']
    },
    {
      name: 'Gold', rooms: 14, price: '3.3B', popular: true,
      features: ['14 Rooms', '2 Floors', '± 280m² Area', 'Fully Furnished']
    },
    {
      name: 'Platinum', rooms: 20, price: '5B',
      features: ['20 Rooms', '3 Floors', '± 400m² Area', 'Premium Design']
    },
    {
      name: 'Diamond', rooms: 30, price: '9B',
      features: ['30 Rooms', '3 Floors', '± 600m² Area', 'Commercial Features']
    }
  ];
  
  const galleryImages = [
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Gallery/galeri1.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Gallery/galeri2.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Gallery/galeri3.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Gallery/galeri4.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Gallery/galeri5.jpg",
    "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Gallery/galeri6.jpg"
  ];

  const calculateROI = () => {
    toast({
      title: "🚧 This feature is under Maintenance"
    });
  };

  return (
    <>
      <Helmet>
        <title>Investment Packages | Dewata Home Living</title>
        <meta name="description" content="Explore DHL's investment packages for co-living and rental properties in Bali. From Silver to Diamond packages, turn your savings into stable monthly income." />
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
            Investment Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          >
            Turn your savings into stable monthly income through Bali's thriving rental market.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[var(--dark-black)] to-[var(--emerald-green)] text-white">
        <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Co-Living Investment Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-body">
                Choose your ideal package—from compact kosts to premium co-living spaces. Each package includes design, construction, and furnishings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {packages.map((pkg, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative flex flex-col ${
                    pkg.popular ? 'border-2 border-[var(--dewata-gold)]' : 'border-white/10'
                    }`}
                >
                    {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--dewata-gold)] text-black px-4 py-1 rounded-full text-sm font-bold shadow-md">
                        Most Popular
                    </div>
                    )}
                    <div className="text-center mb-6">
                    <h3 className="text-3xl font-playfair-display mb-2 text-white">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-[var(--dewata-gold)] mb-2">IDR {pkg.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start font-body">
                        <Check className="w-5 h-5 text-[var(--dewata-gold)] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-white/80">{feature}</span>
                        </li>
                    ))}
                    </ul>
                    <Button asChild variant="default" className="w-full bg-[var(--dewata-gold)] text-black hover:bg-[#bda16e] rounded-xl text-base py-3">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                </motion.div>
                ))}
            </div>
        </div>
      </section>

       <section className="py-16 bg-[var(--emerald-green)]">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:max-w-2xl mx-auto mb-12 h-auto bg-transparent border-b border-[#CBAF7A]/20 p-0 rounded-none">
            {/* <TabsTrigger value="calculator" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>ROI Calculator</TabsTrigger>*/}
            <TabsTrigger value="gallery" className={`py-3 text-lg transition-all text-white/80 hover:text-[var(--dewata-gold)] data-[state=active]:text-[var(--dewata-gold)] data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#CBAF7A] rounded-none`}>Gallery</TabsTrigger>
          </TabsList>
          {/* 
          <TabsContent value="calculator" className="container-custom">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-3xl font-playfair-display mb-6 text-[var(--dewata-gold)] text-center">Calculate Your Potential ROI</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthly-rent" className="flex items-center gap-2 mb-2 text-base font-body text-white/80">
                    <DollarSign className="w-5 h-5 text-[var(--dewata-gold)]" />
                    Monthly Rent per Room (in Million IDR)
                  </Label>
                  <Input id="monthly-rent" type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} className="w-full rounded-xl text-base bg-white/10 border-white/20 text-white" />
                  <Slider defaultValue={[monthlyRent]} max={50} step={0.5} onValueChange={(value) => setMonthlyRent(value[0])} className="mt-4" />
                </div>
                <div>
                  <Label htmlFor="occupancy-rate" className="flex items-center gap-2 mb-2 text-base font-body text-white/80">
                    <Percent className="w-5 h-5 text-[var(--dewata-gold)]" />
                    Occupancy Rate (%)
                  </Label>
                  <Input id="occupancy-rate" type="number" value={occupancyRate} onChange={(e) => setOccupancyRate(Number(e.target.value))} className="w-full rounded-xl text-base bg-white/10 border-white/20 text-white" />
                  <Slider defaultValue={[occupancyRate]} max={100} step={5} onValueChange={(value) => setOccupancyRate(value[0])} className="mt-4" />
                </div>
                <Button onClick={calculateROI} className="w-full bg-[var(--dewata-gold)] hover:bg-[#bda16e] text-black py-6 text-lg rounded-xl shadow-lg">
                  <Calculator className="w-5 h-5 mr-3" />
                  Calculate Potential ROI
                </Button>
                <p className="text-sm text-white/50 text-center mt-4 font-body">
                  *Disclaimer: This calculation is an estimate only.
                </p>
              </div>
            </div>
          </TabsContent> */}
          
          <TabsContent value="gallery" className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-[4/3] rounded-2xl overflow-hidden card-shadow border border-white/10"
                  >
                    <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={`Co-living gallery ${index+1}`} src={src} />
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default InvestmentPackage;
