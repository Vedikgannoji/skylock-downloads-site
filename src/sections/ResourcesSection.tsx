import React from 'react';
import { FileText, Download } from 'lucide-react';
import { PRESENTATION_RESOURCE } from '../data/content';
import styles from './ResourcesSection.module.css';

export const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="section section-alt" aria-labelledby="resources-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Deliverables</span>
          <h2 id="resources-heading" className="section-title">
            Project Presentation
          </h2>
          <p className="section-description">
            Explore the SkyLock project through its presentation, covering the material actually included in the supplied slides.
          </p>
        </div>

        <div className={styles.resourceWrapper}>
          <div className={styles.resourceCard}>
            <div className={styles.cardLeft}>
              <div className={styles.iconBox}>
                <FileText size={26} strokeWidth={2} />
              </div>
              <div className={styles.resourceContent}>
                <div className={styles.fileBadge}>
                  <span className={styles.fileTypeTag}>{PRESENTATION_RESOURCE.fileType}</span>
                  <span className={styles.fileSizeTag}>• {PRESENTATION_RESOURCE.fileSize}</span>
                </div>
                <h3 className={styles.resourceTitle}>{PRESENTATION_RESOURCE.title}</h3>
                <p className={styles.resourceDesc}>{PRESENTATION_RESOURCE.description}</p>
              </div>
            </div>

            <div className={styles.cardRight}>
              <a
                href={PRESENTATION_RESOURCE.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.actionButton}`}
              >
                <Download size={18} />
                <span>Download Presentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
