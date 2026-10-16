import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { SCREENSHOTS_DATA } from '../data/content';
import { ScreenshotItem } from '../types';
import { ImageModal } from '../components/ImageModal';
import styles from './ScreenshotsGallery.module.css';

export const ScreenshotsGallery: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);

  return (
    <section id="screenshots" className="section" aria-labelledby="screenshots-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visual Verification</span>
          <h2 id="screenshots-heading" className="section-title">
            A Closer Look at SkyLock
          </h2>
          <p className="section-description">
            Explore the application interface and its main simulation and tracking views.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {SCREENSHOTS_DATA.map((item) => (
            <div key={item.id} className={styles.galleryCard}>
              <div
                className={styles.imageContainer}
                onClick={() => setSelectedScreenshot(item)}
                tabIndex={0}
                role="button"
                aria-label={`Enlarge ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedScreenshot(item);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.screenshotImg}
                  loading="lazy"
                  width={1200}
                  height={675}
                />
                <div className={styles.imageOverlay}>
                  <Maximize2 size={14} />
                  <span>Click to view full size</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.infoContent}>
                  <span className={styles.categoryTag}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardCaption}>{item.caption}</p>
                </div>
                <button
                  type="button"
                  className={styles.expandBtn}
                  onClick={() => setSelectedScreenshot(item)}
                  aria-label={`Open full resolution image of ${item.title}`}
                >
                  <Maximize2 size={14} />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        screenshot={selectedScreenshot}
        onClose={() => setSelectedScreenshot(null)}
      />
    </section>
  );
};
