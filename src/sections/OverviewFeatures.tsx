import React from 'react';
import { Globe2, Repeat, Eye, Activity } from 'lucide-react';
import { FEATURES_DATA } from '../data/content';
import styles from './OverviewFeatures.module.css';

export const OverviewFeatures: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Orbit':
        return <Globe2 size={22} strokeWidth={2} />;
      case 'Repeat':
        return <Repeat size={22} strokeWidth={2} />;
      case 'Eye':
        return <Eye size={22} strokeWidth={2} />;
      case 'Activity':
        return <Activity size={22} strokeWidth={2} />;
      default:
        return <Activity size={22} strokeWidth={2} />;
    }
  };

  return (
    <section id="overview" className="section section-alt" aria-labelledby="overview-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" id="features">Project Overview &amp; Capabilities</span>
          <h2 id="overview-heading" className="section-title">
            Built to Explore Satellite Tracking
          </h2>
          <p className="section-description">
            SkyLock brings orbital visualization and optical tracking concepts together in an interactive desktop environment. It provides a way to explore satellite motion, line-of-sight visibility, sensor observations, and tracking behavior.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {FEATURES_DATA.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {getIcon(feature.iconName)}
                </div>
                <span className={styles.stepNumber}>{feature.number}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
