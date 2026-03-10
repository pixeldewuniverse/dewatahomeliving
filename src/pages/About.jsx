import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import PageHeroByRoute from "@/components/HeroImage";

const About = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { name: 'Kost Renon', location: 'Renon, Denpasar', category: 'co-living', summary: 'Modern co-living space designed for urban professionals.', image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20renon/kost%20renon/1.jpg', gallery: ['https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20renon/kost%20renon/2.webp', 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20renon/kost%20renon/3.webp']},
    { name: 'Villa Umalas', location: 'Umalas, Kerobokan', category: 'villa', summary: 'Luxury private villa with tropical garden and swimming pool.', image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/umalas%20galery/umalas%20galery/7.jpg', gallery: ['https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/umalas%20galery/umalas%20galery/1.jpg','https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/umalas%20galery/umalas%20galery/2.jpg','https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/umalas%20galery/umalas%20galery/3.jpg','https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/umalas%20galery/umalas%20galery/4.jpg'  ]},
    { name: 'Cafe Renovation', location: 'Canggu, Badung', category: 'renovation', summary: 'Transforming an old cafe into a vibrant new gathering spot.', image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/cafe%20renovation/cafe%20renovation/1.jpg', gallery: ['https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/cafe%20renovation/cafe%20renovation/1.jpg', 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/cafe%20renovation/cafe%20renovation/2.jpg']},
    { name: 'Kost Sanur', location: 'Sanur, Denpasar', category: 'co-living', summary: 'Strategic co-living property near Sanur beach, ideal for long-term stays.', image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20sanur/kost%20sanur/2.jpg', gallery: ['https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20sanur/kost%20sanur/1.jpg', 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20sanur/kost%20sanur/3.jpg']},
    { name: 'Office Renovation', location: 'Denpasar City', category: 'renovation', summary: 'Modern office interior renovation for a productive work environment.', image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/renovasi%20kantor/renovasi%20kantor/2.jpg', gallery: ['https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/renovasi%20kantor/renovasi%20kantor/1.webp', 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/renovasi%20kantor/renovasi%20kantor/4.jpg']},
    /*{ name: 'Villa Canggu', location: 'Canggu, Badung', category: 'villa', summary: 'Chic villa in the heart of Canggu, perfect for rental income.', image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/1.jpg', gallery: ['https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/2.jpg', 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/3.jpg', 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/4.jpg','https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/5.jpg']},*/
    { name: 'Amed', location: 'Amed, Karangasem', category: 'Private House', summary: '', image: 'https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/1.jpeg', gallery: ['https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/2.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/3.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/4.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/5.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/6.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/7.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/8.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/9.jpeg','https://raw.githubusercontent.com/pixeldewuniverse/DHL/main/assets/Portfolio/Amed/10.jpeg']}
  ];

  const processSteps = [
    { title: 'Consultation', description: 'Discuss your investment goals and budget with our experts.' },
    { title: 'Location Analysis', description: 'We identify strategic locations with high rental demand.' },
    { title: 'Design & Cost Estimate (RAB)', description: 'Receive detailed architectural plans and transparent pricing.' },
    { title: 'Construction', description: 'Quality building with regular progress updates and inspections.' },
    { title: 'Handover & Maintenance', description: 'Complete property handover with ongoing support services.' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
    
  const filterButtons = ['all', 'co-living', 'renovation', 'villa', 'commercial'];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>About Us | Dewata Home Living</title>
        <meta name="description" content="Learn about Dewata Home Living, Bali's trusted partner for co-living and rental property investment. From consultation to construction and maintenance." />
      </Helmet>

      <PageHeroByRoute />
       
      

      {/* Who We Are Section */}
      <section className="py-16 bg-[var(--emerald-green)] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-10 text-center text-[var(--dewata-gold)] font-playfair-display">Who We Are</h2>
              <p className="text-lg text-white/80 font-body leading-relaxed mb-6">
                Dewata Home Living is a Bali-based property development partner specializing in co-living and rental investment properties. We help investors create productive assets through a seamless, transparent, and profitable process.
              </p>
              <p className="text-lg text-white/80 font-body leading-relaxed">
                As a division of PT. Dewata Karya Investama, we bring years of expertise in land acquisition, architectural design, construction management, and property maintenance to ensure your investment delivers consistent returns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[var(--dark-black)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card rounded-2xl p-12 ">
              <div className="text-7xl text-[var(--dewata-gold)] mb-6 leading-none font-playfair-display">"</div>
              <p className="text-3xl md:text-4xl font-playfair-display text-white leading-relaxed italic">
                A great investment doesn't just generate income—it creates a place to belong.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Portfolio Section */}
      <section className="py-16 bg-[var(--emerald-green)] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-8 text-[var(--dewata-gold)] font-playfair-display">Our Portfolio</h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-body mb-8">
              {filterButtons.map(filter => (
                 <Button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    variant={activeFilter === filter ? "default" : "outline"}
                    className={`${
                        activeFilter === filter
                            ? 'bg-[var(--dewata-gold)] text-[var(--dark-black)] shadow-md hover:bg-[#bda16e]' 
                            : 'border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111]'
                    } rounded-2xl text-base px-6 py-3`}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.name} src={project.image} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 font-playfair-display text-white">{project.name}</h3>
                  <p className="text-white/70 text-sm font-body mb-3">{project.location}</p>
                  <span className="inline-block px-4 py-1 bg-white/10 text-[var(--dewata-gold)] text-xs rounded-full capitalize font-medium border border-[var(--dewata-gold)]/20">
                    {project.category}
                  </span>
                  <p className="text-white/80 text-base mt-4 font-body">{project.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-[var(--dark-black)] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--dewata-gold)] font-playfair-display">Our Process</h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-body">
              A transparent, step-by-step journey from concept to completion.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[var(--emerald-green)] rounded-2xl flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-[var(--dewata-gold)]" />
                </div>
                <div className="flex-grow pt-1">
                  <h3 className="text-2xl mb-2 font-playfair-display text-white">{step.title}</h3>
                  <p className="text-lg text-white/70 font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--emerald-green)] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-playfair-display text-white">
              Ready to build your investment portfolio with us?
            </h2>
            <Link
              to="/contact"
              className="px-10 py-4 bg-[var(--dewata-gold)] text-[var(--dark-black)] rounded-2xl text-lg font-medium hover:bg-[#bda16e] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] p-0 rounded-none sm:rounded-2xl bg-[#1a1a1a] border border-white/10 text-white flex flex-col overflow-hidden">
          <AlertDialogHeader className="p-4 sm:p-6 pb-0">
            <AlertDialogTitle className="text-2xl sm:text-3xl font-playfair-display text-[var(--dewata-gold)]">
              {selectedProject?.name}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm sm:text-base text-white/70 font-body">
              {selectedProject?.location} – {selectedProject?.summary}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 overflow-y-auto">
            {selectedProject?.gallery.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`${selectedProject?.name} Gallery ${idx + 1}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            ))}
          </div>
          <AlertDialogFooter className="p-4 sm:p-6 pt-4 border-t border-white/10">
            <AlertDialogCancel className="w-full sm:w-auto rounded-2xl px-6 py-3 border-[var(--dewata-gold)] text-[var(--dewata-gold)] hover:bg-[var(--dewata-gold)] hover:text-[#111111]">
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default About;
