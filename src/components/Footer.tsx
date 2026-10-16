import React from 'react';
import { Target } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <Target className={styles.logoIcon} strokeWidth={2.5} />
              <span>{APP_CONFIG.title}</span>
            </div>
            <p className={styles.brandDesc}>
              {APP_CONFIG.description}
            </p>
          </div>

          <div className={styles.linksCol}>
            <div>
              <h4 className={styles.colTitle}>Navigation</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#hero" className={styles.footerLink}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#overview" className={styles.footerLink}>
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#features" className={styles.footerLink}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className={styles.footerLink}>
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#installation" className={styles.footerLink}>
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a href="#team" className={styles.footerLink}>
                    Team {APP_CONFIG.teamName}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Downloads</h4>
              <ul className={styles.linkList}>
                <li>
                  <a
                    href={APP_CONFIG.portablePackagePath}
                    className={styles.footerLink}
                  >
                    Windows Portable Package (ZIP)
                  </a>
                </li>
                <li>
                  <a
                    href={APP_CONFIG.presentationPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    Project Presentation (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Academic Affiliation</h4>
              <ul className={styles.linkList}>
                <li className={styles.footerLink}>Institution: {APP_CONFIG.institution}</li>
                <li className={styles.footerLink}>Team: {APP_CONFIG.teamName}</li>
                <li className={styles.footerLink}>Competition: SIH 2026 (PS ID 26169)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.attribution}>
            Team {APP_CONFIG.teamName} • {APP_CONFIG.institution}
          </div>
          <div>
            © {APP_CONFIG.copyrightYear} SkyLock. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
