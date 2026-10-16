import React, { useState, useEffect } from 'react';
import { Target, Menu, X, Download } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero" className={styles.brand} aria-label="SkyLock Home">
          <Target className={styles.logoIcon} strokeWidth={2.5} />
          <span>SkyLock</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation">
          <ul className={styles.navLinks}>
            <li>
              <a href="#overview" className={styles.navLink}>
                Overview
              </a>
            </li>
            <li>
              <a href="#features" className={styles.navLink}>
                Features
              </a>
            </li>
            <li>
              <a href="#screenshots" className={styles.navLink}>
                Screenshots
              </a>
            </li>
            <li>
              <a href="#installation" className={styles.navLink}>
                Installation
              </a>
            </li>
            <li>
              <a href="#team" className={styles.navLink}>
                Team
              </a>
            </li>
            <li>
              <a href="#resources" className={styles.navLink}>
                Resources
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.navActions}>
          <a
            href={APP_CONFIG.portablePackagePath}
            className={`btn btn-primary btn-sm ${styles.downloadBtn}`}
          >
            <Download size={15} />
            <span>Download SkyLock</span>
          </a>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile Navigation">
          <a href="#overview" className={styles.mobileNavLink} onClick={closeMenu}>
            Overview
          </a>
          <a href="#features" className={styles.mobileNavLink} onClick={closeMenu}>
            Features
          </a>
          <a href="#screenshots" className={styles.mobileNavLink} onClick={closeMenu}>
            Screenshots
          </a>
          <a href="#installation" className={styles.mobileNavLink} onClick={closeMenu}>
            Installation
          </a>
          <a href="#team" className={styles.mobileNavLink} onClick={closeMenu}>
            Team
          </a>
          <a href="#resources" className={styles.mobileNavLink} onClick={closeMenu}>
            Resources
          </a>
          <a
            href={APP_CONFIG.portablePackagePath}
            className={`btn btn-primary ${styles.mobileDownloadBtn}`}
            onClick={closeMenu}
          >
            <Download size={16} />
            <span>Download SkyLock</span>
          </a>
        </nav>
      )}
    </header>
  );
};
