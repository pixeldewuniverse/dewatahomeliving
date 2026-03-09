import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';

const heroData = {
  '/': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/5.jpg',
    title: 'A Place to Belong. A Style to Remember.',
    subtitle: 'Creating homes that feel like they\'re truly yours.',
  },
  '/about': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/villa%20canggu/villa%20canggu/6.jpg',
    title: 'About Dewata Home Living',
    subtitle: 'We build value, not just buildings.',
  },
  '/services/investment-package': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/umalas%20galery/umalas%20galery/7.jpg',
    title: 'Investment Packages',
    subtitle: 'Choose your ideal package—from compact kosts to premium co-living.',
  },
  '/services/building-construction': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero-construction.jpg',
    title: 'Building & Construction',
    subtitle: 'From concept to completion—transparent, on-time, and high-quality.',
  },
  '/services/lease-freehold': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero-land.jpg',
    title: 'Leasehold & Freehold',
    subtitle: 'Access curated properties in strategic locations that match your goals.',
  },
  '/services/maintenance': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/hero-maintenance.jpg',
    title: 'Property Maintenance',
    subtitle: 'Regular upkeep and asset management for stable rental value.',
  },
  '/blog': {
    image: 'https://raw.githubusercontent.com/pixeldewads-digital/DHL/main/assets/Portfolio/kost%20sanur/kost%20sanur/2.jpg',
    title: 'Dewata Insights',
    subtitle: 'Insights, tips, and news on Bali\'s property investment market from the experts.',
  },
};

const PageHeroByRoute = ({ title, subtitle, image }) => {
  const { pathname } = useLocation();
  const data = heroData[pathname] || heroData['/'];

  const finalTitle = title || data.title;
  const finalSubtitle = subtitle || data.subtitle;
  const finalImage = image || data.image;

  return <Hero image={finalImage} title={finalTitle} subtitle={finalSubtitle} />;
};

export default PageHeroByRoute;