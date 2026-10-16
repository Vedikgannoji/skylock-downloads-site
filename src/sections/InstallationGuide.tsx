import React from 'react';
import { Download, AlertCircle, CheckCircle2, Monitor, HelpCircle } from 'lucide-react';
import { INSTALL_STEPS, SYSTEM_REQUIREMENTS, TROUBLESHOOTING_TIPS } from '../data/content';
import styles from './InstallationGuide.module.css';

export const InstallationGuide: React.FC = () => {
  return (
    <section id="installation" className="section section-alt" aria-labelledby="install-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Quick Start</span>
          <h2 id="install-heading" className="section-title">
            Get Started in 3 Simple Steps
          </h2>
          <p className="section-description">
            Download the portable Windows package, extract it, and launch SkyLock. No separate Python installation or developer dependencies are required.
          </p>
        </div>

        {/* 3 Steps */}
        <div className={styles.stepsContainer}>
          {INSTALL_STEPS.map((step) => (
            <div key={step.stepNumber} className={styles.stepCard}>
              <div className={styles.stepInfo}>
                <div className={styles.stepBadge}>
                  <span className={styles.stepNumber}>STEP {step.stepNumber}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepInstruction}>{step.instruction}</p>

                {step.buttonText && step.buttonHref && (
                  <div className={styles.stepAction}>
                    <a
                      href={step.buttonHref}
                      className="btn btn-primary"
                    >
                      <Download size={17} />
                      <span>{step.buttonText}</span>
                    </a>
                  </div>
                )}

                {step.note && (
                  <div
                    className={`${styles.noteBox} ${
                      step.note.includes('Important:') ? styles.noteWarning : styles.noteSuccess
                    }`}
                  >
                    {step.note.includes('Important:') ? (
                      <AlertCircle size={18} className="flex-shrink-0" />
                    ) : (
                      <CheckCircle2 size={18} className="flex-shrink-0" />
                    )}
                    <span>{step.note}</span>
                  </div>
                )}
              </div>

              <div className={styles.stepVisual}>
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className={styles.stepImage}
                  loading="lazy"
                  width={600}
                  height={360}
                />
              </div>
            </div>
          ))}
        </div>

        {/* System Requirements Panel */}
        <div className={styles.requirementsPanel}>
          <div className={styles.panelHeader}>
            <Monitor size={22} color="#2563EB" />
            <h3 className={styles.panelTitle}>System Requirements</h3>
          </div>

          <div className={styles.reqGrid}>
            {SYSTEM_REQUIREMENTS.map((req) => (
              <div key={req.label} className={styles.reqItem}>
                <div className={styles.reqLabel}>{req.label}</div>
                <div className={styles.reqValue}>{req.value}</div>
              </div>
            ))}
          </div>

          <div className={styles.troubleshootingHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={18} color="#6B7280" />
              <span>Troubleshooting &amp; Operational Notes</span>
            </div>
          </div>

          <div className={styles.troubleList}>
            {TROUBLESHOOTING_TIPS.map((tip) => (
              <div key={tip.title} className={styles.troubleItem}>
                <h4 className={styles.troubleTitle}>{tip.title}</h4>
                <p className={styles.troubleDetail}>{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
