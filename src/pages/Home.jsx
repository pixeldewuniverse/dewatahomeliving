import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, CheckCircle, HeartHandshake as Handshake, Landmark, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeroByRoute from "@/components/HeroImage"; // Import PageHeroByRoute

function LogoCard({ src, alt }) {
  return (
    <div className="flex items-center justify-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 w-full h-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-20 md:max-h-24 w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

const Home = () => {
  const whyChooseUs = [
    { icon: CheckCircle, title: "Secure & Transparent", description: "Clear cost estimates, formal contracts, and regular progress reports for your peace of mind." },
    { icon: Award, title: "Long-Term Design", description: "Functional space and considered aesthetics for stable occupancy and high investment value." },
    { icon: Landmark, title: "Curated Land Options", description: "Strategic location choices tailored to your target market and budget." },
    { icon: Handshake, title: "Full Project Management", description: "From permits to handover, we manage your entire investment process." },
  ];

  const packages = [
    { name: "Silver", price: "IDR 1.6B", rooms: "8 Rooms" },
    { name: "Gold", price: "IDR 3.3B", rooms: "14 Rooms", popular: true },
    { name: "Platinum", price: "IDR 5B", rooms: "20 Rooms" },
    { name: "Diamond", price: "IDR 9B", rooms: "30 Rooms" },
  ];

  const clients = [
    { name: "Kizuna", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/1.png" },
    { name: "Damara Village", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/2.png" },
    { name: "Natadesa", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/3.png" },
    { name: "Greenwoods & Jimbaran Hijau", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/4.png" },
    { name: "Cibubur Golf", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/cibubur.png" },
    { name: "Darmo Golf", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/darmogolf.jpeg" },
    { name: "Deltamas", logo_url: "https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Client%20DHL/deltamas.jpg" },
  ];

  return (
    <>
      <Helmet>
        <title>Dewata Home Living — Rental Property & Co-Living Investment in Bali</title>
        <meta
          name="description"
          content="Invest in Bali's co-living and rental property opportunities. From land acquisition to construction and maintenance, we handle everything for you."
        />
      </Helmet>

   
      {/* 🟩 Auto Hero Section */}
      <PageHeroByRoute />

      {/* CTA bawah hero */}
      <div className="relative z-10 -mt-16 mb-24 flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-[var(--emerald-green)] text-white hover:bg-[#00402F] rounded-2xl px-6 py-3 shadow-lg"
        >
          <Link to="/services/investment-package">View Investment Packages</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111] rounded-2xl px-6 py-3 shadow-lg"
        >
          <Link to="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
      
      <section className="py-16 bg-[var(--dark-black)] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Why Invest with DHL?</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-body">We are your trusted partner in Bali property investment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="glass-card rounded-2xl p-8 text-center flex flex-col items-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-[var(--dewata-gold)]/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[var(--dewata-gold)]" />
                </div>
                <h3 className="text-2xl mb-3 text-white font-playfair-display">{item.title}</h3>
                <p className="text-white/70 leading-relaxed font-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gradient-to-b from-[var(--dark-black)] to-[var(--emerald-green)] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Investment Packages</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-body">Choose your ideal package—from compact kosts to premium co-living spaces.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`bg-white rounded-2xl p-8 card-shadow border border-[var(--dewata-gold)]/20 text-center relative flex flex-col ${
                  pkg.popular ? "border-2 border-[var(--dewata-gold)]" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--dewata-gold)] text-black px-4 py-1 text-sm font-bold rounded-full">POPULAR</div>
                )}
                <h3 className="text-3xl font-playfair-display text-[var(--dark-black)] mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-[var(--emerald-green)] mb-1">{pkg.price}</p>
                <p className="text-gray-500 mb-6">{pkg.rooms}</p>
                <div className="flex-grow" />
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto w-full border-[var(--emerald-green)] text-[var(--emerald-green)] hover:bg-[var(--emerald-green)] hover:text-white rounded-2xl px-6 py-3"
                >
                  <Link to="/services/investment-package">Details</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients — 2x4 centered */}
      <section className="py-16 bg-[var(--emerald-green)] text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Our Clients</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-body">We collaborate with leading property developers in Indonesia.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center items-center max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <LogoCard key={index} src={client.logo_url} alt={client.name} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/80 mb-6">Interested in partnering with us?</p>
            <Button
              asChild
              variant="outline"
              className="border border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111] rounded-2xl px-6 py-3"
            >
              <Link to="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
