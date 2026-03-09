import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	const [isHeroBright, setIsHeroBright] = useState(false); // 🔥 NEW
	const location = useLocation();

	// 🔹 Dua versi logo (ganti URL putih kalau beda nama)
	const logoGoldUrl =
		'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/logo-dhl.png';
	const logoWhiteUrl =
		'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/logo-dhl-white.png';

	// 🔹 Map route → hero image (silakan sesuaikan dengan real asset-mu)
	const getHeroImageForRoute = (pathname) => {
		if (pathname.startsWith('/blog')) {
			return 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20sanur/kost%20sanur/2.jpg';
		}
		if (pathname.startsWith('/about')) {
			return 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/5.jpg';
		}
		if (pathname.startsWith('/services')) {
			return 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero-services.webp';
		}
		if (pathname.startsWith('/contact')) {
			return 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20sanur/kost%20sanur/2.jpg';
		}

		// default: home hero
		return 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero-home.webp';
	};

	// 🔥 Deteksi brightness hero → set isHeroBright
	useEffect(() => {
		const heroImageUrl = getHeroImageForRoute(location.pathname);
		if (!heroImageUrl) return;

		const img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = heroImageUrl;

		img.onload = () => {
			const canvas = document.createElement('canvas');
			const size = 8;
			canvas.width = size;
			canvas.height = size;
			const ctx = canvas.getContext('2d');
			if (!ctx) return;

			ctx.drawImage(img, 0, 0, size, size);
			const { data } = ctx.getImageData(0, 0, size, size);

			let total = 0;
			for (let i = 0; i < data.length; i += 4) {
				const r = data[i];
				const g = data[i + 1];
				const b = data[i + 2];
				total += (r + g + b) / 3;
			}
			const brightness = total / (data.length / 4);

			// threshold kira-kira, bisa kamu tweak (160–190)
			setIsHeroBright(brightness > 160);
		};

		// kalau gagal load (CORS/404), fallback ke logo gold
		img.onerror = () => {
			setIsHeroBright(false);
		};
	}, [location.pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
		setIsServicesOpen(false);
	}, [location]);

	const services = [
		{ name: 'Investment Package', path: '/services/investment-package' },
		{ name: 'Building & Construction', path: '/services/building-construction' },
		{ name: 'Lease & Freehold', path: '/services/lease-freehold' },
		{ name: 'Maintenance', path: '/services/maintenance' },
	];

	const NavItem = ({ to, children }) => (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`
        relative py-2 px-1 text-base font-medium
        text-[var(--dewata-gold)] nav-text-strong
        transition-colors
        hover:text-[var(--emerald-green)]
        ${isActive ? 'text-[var(--emerald-green)]' : ''}
      `
			}
		>
			{({ isActive }) => (
				<>
					{children}
					{isActive && (
						<motion.div
							className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--emerald-green)]"
							layoutId="underline"
						/>
					)}
				</>
			)}
		</NavLink>
	);

	// 🔹 Animasi mobile menu (pakai yang kemarin)
	const mobileMenuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.25,
				ease: 'easeOut',
				when: 'beforeChildren',
				staggerChildren: 0.05,
			},
		},
		exit: {
			opacity: 0,
			y: -16,
			transition: {
				duration: 0.2,
				ease: 'easeIn',
			},
		},
	};

	const mobileItemVariants = {
		hidden: { opacity: 0, x: -8 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<nav
			className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-transparent shadow-lg' : 'bg-transparent'}
      `}
		>
			<div className="container-custom">
				<div className="flex items-center justify-between h-28">
					{/* LOGO */}
          <Link to="/" cclassName="flex items-center space-x-3 relative z-50">
						<div className="nav-logo-bg">
						<img
							src={isHeroBright ? logoWhiteUrl : logoGoldUrl}
							// NOTE: kalau ingin kebalik (hero terang → logo gold, hero gelap → logo white)
							// tinggal tukar posisi di atas.
							alt="Dewata Home Living Logo"
              className="h-32 md:h-36 lg:h-40 w-auto object-contain nav-logo-strong hover:scale-105 transition-transform duration-300 ease-out"
							/>
						</div>
					</Link>

					{/* DESKTOP MENU */}
					<div className="hidden lg:flex items-center space-x-8">
						<NavItem to="/">Home</NavItem>
						<NavItem to="/about">About Us</NavItem>

						{/* SERVICES DROPDOWN */}
						<div className="relative group">
							<div className="relative">
								<span
									className={`
                    py-2 px-1 text-base font-medium
                    text-[var(--dewata-gold)] nav-text-strong
                    flex items-center space-x-1 cursor-pointer
                    ${location.pathname.startsWith('/services')
											? 'text-[var(--emerald-green)]'
											: 'hover:text-[var(--emerald-green)]'
										}
                  `}
								>
									<span>Services</span>
									<ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
								</span>

								{location.pathname.startsWith('/services') && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--emerald-green)]"
										layoutId="underline-desktop-services"
									/>
								)}
							</div>

							<div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#1a1a1a] rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 border border-white/10">
								{services.map((service) => (
									<Link
										key={service.path}
										to={service.path}
										className="block px-5 py-3 text-base text-[var(--dewata-gold)] hover:text-[var(--emerald-green)] hover:bg-white/5 transition-colors"
									>
										{service.name}
									</Link>
								))}
							</div>
						</div>

						<NavItem to="/blog">Blog</NavItem>
						<NavItem to="/contact">Contact</NavItem>

						{/* CTA BUTTON */}
						<Button
							asChild
							size="sm"
							className="bg-[var(--dewata-gold)] text-[var(--dark-black)] hover:bg-[#bda16e] rounded-2xl px-6 py-3"
						>
							<Link to="/contact">Consultation</Link>
						</Button>
					</div>

					{/* MOBILE TOGGLE */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 text-white/85 hover:text-[var(--dewata-gold)] transition-colors"
					>
						{isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
					</button>
				</div>
			</div>

			{/* MOBILE MENU */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						key="mobile-menu"
						variants={mobileMenuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="lg:hidden bg-[var(--emerald-green)] border-t border-white/10"
					>
						<div className="container-custom py-3 space-y-1.5">
							<motion.div variants={mobileItemVariants}>
								<Link
									to="/"
									className="block px-4 py-2.5 text-base font-medium text-white hover:bg-black/10 rounded-lg transition-colors"
								>
									Home
								</Link>
							</motion.div>

							<motion.div variants={mobileItemVariants}>
								<Link
									to="/about"
									className="block px-4 py-2.5 text-base font-medium text-white hover:bg-black/10 rounded-lg transition-colors"
								>
									About Us
								</Link>
							</motion.div>

							<motion.div variants={mobileItemVariants}>
								<div>
									<button
										onClick={() => setIsServicesOpen(!isServicesOpen)}
										className="w/full flex items-center justify-between px-4 py-2.5 text-base font-medium text-white hover:bg-black/10 rounded-lg transition-colors"
									>
										<span>Services</span>
										<ChevronDown
											className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''
												}`}
										/>
									</button>

									{isServicesOpen && (
										<div className="ml-4 mt-1.5 space-y-1">
											{services.map((service) => (
												<Link
													key={service.path}
													to={service.path}
													className="block px-4 py-2 text-sm text-white hover:bg-black/10 rounded-lg transition-colors"
												>
													{service.name}
												</Link>
											))}
										</div>
									)}
								</div>
							</motion.div>

							<motion.div variants={mobileItemVariants}>
								<Link
									to="/blog"
									className="block px-4 py-2.5 text-base font-medium text-white hover:bg.black/10 rounded-lg transition-colors"
								>
									Blog
								</Link>
							</motion.div>

							<motion.div variants={mobileItemVariants}>
								<Link
									to="/contact"
									className="block px-4 py-2.5 text-base font-medium text-white hover:bg-black/10 rounded-lg transition-colors"
								>
									Contact
								</Link>
							</motion.div>

							<motion.div variants={mobileItemVariants}>
								<Link
									to="/contact"
									className="block mx-4 mt-6 px-6 py-4 bg-[var(--dewata-gold)] text-[var(--dark-black)] text-center rounded-2xl text-base font-semibold hover:bg-[#bda16e] transition-colors shadow-lg"
								>
									Free Consultation
								</Link>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navigation;