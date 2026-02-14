/**
 * Home Page (Overview)
 *
 * The main dashboard page showing system status, key statistics,
 * recent events, SSA context information, and available services.
 */

import HeroSection from '../components/home/HeroSection';
import StatsGrid from '../components/home/StatsGrid';
import EventsList from '../components/home/EventsList';
import InfoGrid from '../components/home/InfoGrid';
import ServicesGrid from '../components/home/ServicesGrid';

const HomePage = () => (
  <main className="page home-page">
    <div className="container">
      <HeroSection />
      <StatsGrid />
      <EventsList />
      <InfoGrid />
      <ServicesGrid />
    </div>
  </main>
);

export default HomePage;
