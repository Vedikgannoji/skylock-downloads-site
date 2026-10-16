import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { OverviewFeatures } from './sections/OverviewFeatures';
import { ScreenshotsGallery } from './sections/ScreenshotsGallery';
import { InstallationGuide } from './sections/InstallationGuide';
import { TeamSection } from './sections/TeamSection';
import { ResourcesSection } from './sections/ResourcesSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <OverviewFeatures />
        <ScreenshotsGallery />
        <InstallationGuide />
        <TeamSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
