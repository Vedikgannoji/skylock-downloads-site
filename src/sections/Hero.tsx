import React from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>{APP_CONFIG.heroLabel}</div>
          <h1 id="hero-heading" className={styles.mainHeading}>
            {APP_CONFIG.title}
          </h1>
          <p className={styles.supportingHeadline}>
            {APP_CONFIG.headline}
          </p>
          <p className={styles.description}>
            {APP_CONFIG.description}
          </p>

          <div className={styles.buttonGroup}>
            <a
              href={APP_CONFIG.portablePackagePath}
              className="btn btn-primary"
            >
              <Download size={18} />
              <span>Download SkyLock</span>
            </a>
            <a
              href={APP_CONFIG.presentationPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileText size={18} />
              <span>View Presentation</span>
            </a>
          </div>

          <div className={styles.downloadMeta}>
            <CheckCircle2 size={15} color="#10B981" />
            <span>Standalone Windows Release ({APP_CONFIG.version}) • No setup required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
